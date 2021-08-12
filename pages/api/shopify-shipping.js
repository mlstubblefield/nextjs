
const getDate = (numberOfDaysToAdd) => {
    var someDate = new Date();
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
    return someDate
}

export default function handler(req, res) {
    console.log(JSON.stringify(req.body, null, 2))
    if(req.body?.rate?.origin?.city != "Port St. Lucie"){
        console.log('condition met')
        res.status(200).json({
            "rates": [
              {
                "currency": "USD",
                "description": "Probably UPS",
                "max_delivery_date": getDate(4),
                "min_delivery_date": getDate(3),
                "service_code": "GND",
                "service_name": "Ground",
                "total_price": "10"
              },
              {
                "currency": "USD",
                "max_delivery_date": getDate(2),
                "min_delivery_date": getDate(2),
                "service_code": "2D",
                "service_name": "2 Day",
                "total_price": "20"
              },
              {
                "currency": "USD",
                "max_delivery_date": getDate(1),
                "min_delivery_date": getDate(1),
                "service_code": "1D",
                "service_name": "Overnight",
                "total_price": "30"
              }
            ]
          })
    }else{
        res.status(200).json({
            "rates": [
              {
                "currency": "USD",
                "description": "Probably FedEx",
                "max_delivery_date": getDate(5),
                "min_delivery_date": getDate(4),
                "service_code": "GND",
                "service_name": "Ground",
                "total_price": "15"
              },
              {
                "currency": "USD",
                "max_delivery_date": getDate(2),
                "min_delivery_date": getDate(2),
                "service_code": "2D",
                "service_name": "2 Day",
                "total_price": "25"
              },
              {
                "currency": "USD",
                "max_delivery_date": getDate(1),
                "min_delivery_date": getDate(1),
                "service_code": "1D",
                "service_name": "Overnight",
                "total_price": "35"
              }
            ]
          })
    }
    
}