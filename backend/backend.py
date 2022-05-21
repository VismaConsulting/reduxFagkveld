
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)


connection = "sqlite:///db.db"
app.config['SQLALCHEMY_DATABASE_URI'] = connection
db = SQLAlchemy(app)

db.create_all()


class Todo(db.Model):
    __tablename__ = "todo"
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(2048))
    done = db.Column(db.Boolean)
    def as_dict(self):
        return {
            "id": self.id,
            "text": self.text,
            "done": self.done,
        }

    def __init__(self, text):
        self.text = text
        self.done = False
   

def lag_todo(text):
    ny_todo = Todo(text)
    db.session.add(ny_todo)
    db.session.commit()
    return ny_todo.as_dict()

def hent_alle_todoer():
    alle_todoer = Todo.query.all()
    return [todo.as_dict() for todo in alle_todoer]

    
def slett_todo(id):
    todo_som_skal_slettes = Todo.query.get(id)
    db.session.delete(todo_som_skal_slettes)
    db.session.commit()

def modify_todo_done(id, new_done): 
    todo = Todo.query.get(id)
    todo.done = new_done
    db.session.commit()
    return todo.as_dict()

@app.route("/api/todos", methods=["POST", "GET", "DELETE", "PATCH"])
def todos():
    try:   
        if (request.method == "POST"):
            print(request.json)
            text = request.json["text"]
            lagt_til_todo = lag_todo(text)
            return jsonify(lagt_til_todo)
        
        if (request.method == "GET"):
            alle_todoer = hent_alle_todoer()
            return jsonify(alle_todoer)
            
    

    except Exception as e:
        return repr(e), 500

@app.route("/api/todos/<id>", methods=["PATCH", "DELETE"])
def todo(id):
    try:   
        if (request.method == "DELETE"):
            slett_todo(id)
            return jsonify(int(id))
            
        if (request.method == "PATCH"):
            print(request.json)
            new_done = request.json["done"]
            modified_todo = modify_todo_done(id, new_done)
            return jsonify(modified_todo)

    except Exception as e:
        return repr(e), 500



