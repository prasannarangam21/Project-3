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

        # convert to integers
        response = request.get_json()
        print(response)
        for r in response["responses"]:
            r = int(r)

        
   
    result = 5
    return render_template("index.html", result=result)


if __name__ == "__main__":
    app.run(debug=True)
