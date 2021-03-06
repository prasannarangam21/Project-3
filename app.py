from flask import Flask, jsonify, render_template, request
from joblib import dump, load
import numpy as np

app = Flask(__name__)
model = load('BestLg.joblib')

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/model")
def prediction():
    return render_template("predict.html")


@app.route("/summary")
def summary():
    return render_template("summary.html")


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

@app.route("/visualizations")
def viz():
    return render_template("visualizations.html")


if __name__ == "__main__":
    app.run(debug=True)