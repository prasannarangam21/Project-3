from flask import Flask, jsonify, render_template, request
from joblib import dump, load
import numpy as np

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
        converted = []

        response = request.get_json()
        print(response)
        for r in response["responses"]:
            r = int(r)
            converted.append(r)

        newconverted = np.array([converted])
        result = model.predict(newconverted)


    return jsonify({"result":int(result[0])})
    


if __name__ == "__main__":
    app.run(debug=True)
