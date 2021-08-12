

export default function handler(req, res) {
    console.log(JSON.stringify(req.body, null, 2))
    res.status(200).json({
        "rates": [
          {
            "currency": "CAD",
            "description": "This is the fastest option by far",
            "max_delivery_date": "2022-04-12 14:48:45 -0400",
            "min_delivery_date": "2022-04-12 14:48:45 -0400",
            "service_code": "ON",
            "service_name": "Yolo",
            "total_price": "1295"
          },
          {
            "currency": "USD",
            "max_delivery_date": "2022-04-22 14:48:45 -0400",
            "min_delivery_date": "2022-04-11 14:48:45 -0400",
            "service_code": "2D",
            "service_name": "Yolo Overnight",
            "total_price": "2934"
          },
          {
            "currency": "USD",
            "max_delivery_date": "2022-04-14 14:48:45 -0400",
            "min_delivery_date": "2022-04-12 14:48:45 -0400",
            "service_code": "1DDDDDDDD",
            "service_name": "Yololololo",
            "total_price": "3587"
          }
        ]
      })
}