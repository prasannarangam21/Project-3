from flask import Flask, jsonify, render_template, request
from joblib import dump, load

app = Flask(__name__)
model = load('BestLg.joblib')

@app.route("/")
def home():
    return render_template("index.html")
   
@app.route("/predict", methods=["POST"])
def predict():
    
    school = request.form.get("school") 
    absences = request.form.get("freetime")
    age = request.form.get("age") 
    health = request.form.get("health")
    Walc = request.form.get("Walc") 
    goout = request.form.get("goout")
   
    result = model.predict()
    return render_template("index.html", result=result)


if __name__ == "__main__":
    app.run(debug=True)
