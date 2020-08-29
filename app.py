from flask import Flask, jsonify, render_template, request
from joblib import dump, load

app = Flask(__name__)
model = load('BestLg.joblib')

@app.route("/")
def home():
    return render_template("index.html")
   
@app.route("/predict", methods=["POST"])
def predict():
    
    # when form is submitted
    if request.method == 'POST':

        freetime = request.form.get("freetime")
        age = request.form.get("age") 
        health = request.form.get("health")
        Walc = request.form.get("Walc") 
        goout = request.form.get("goout")
    
        responses = [freetime, age, health, Walc, goout]
        
        return responses

        # convert to integers
        # response = request.get_json()
        # for r in response["responses"]:
        #     r = int(r)
   
    # responses = model.predict(responses)
    return render_template("index.html", result=responses)


if __name__ == "__main__":
    app.run(debug=True)
