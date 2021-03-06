import React from "react"
import { Doughnut } from "react-chartjs-2"

class Overview extends React.Component {

    componentDidMount() {
        
    }

    render() {
        const data = {
            datasets: [{
                backgroundColor: ["rgba(75,192,192,1)", "rgba(20,160,20,1)", "rgba(250,100,192,1)"],
                data: [10, 20, 30]
            }],
            labels: ["John", "Sushen", "Andy"]
        };

        const options = {
            title: {
                display: true,
                text: "My Chart",
                fontSize: 10
            },

        }

        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <Doughnut options={options} data={data}/>
                    </div>
                    <div className="col-4"></div>
                </div>

                
            </div>
        );
    }
}

export default Overview