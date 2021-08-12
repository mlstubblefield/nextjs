

export default function handler(req, res) {
    console.log(JSON.stringify(req.body, null, 2))
    if(req.body?.rate?.items?.some(x => x.sku == "matt12345")){
        console.log('condition met')
        res.status(200).json({
            "rates": [
              {
                "currency": "USD",
                "description": "This is the fastest option by far",
                "max_delivery_date": "2024-04-12 14:48:45 -0400",
                "min_delivery_date": "2022-04-12 14:48:45 -0400",
                "service_code": "ON",
                "service_name": "Yolo",
                "total_price": "10"
              },
              {
                "currency": "USD",
                "max_delivery_date": "2024-04-22 14:48:45 -0400",
                "min_delivery_date": "2022-04-11 14:48:45 -0400",
                "service_code": "2D",
                "service_name": "Yolo Overnight",
                "total_price": "20"
              },
              {
                "currency": "USD",
                "max_delivery_date": "2024-04-14 14:48:45 -0400",
                "min_delivery_date": "2022-04-12 14:48:45 -0400",
                "service_code": "1D",
                "service_name": "Yololololo",
                "total_price": "30"
              }
            ]
          })
    }else{
        res.status(200).json({
            "rates": [
              {
                "currency": "USD",
                "description": "This is the fastest option by farrrrrrrrrrrrrrrrr",
                "max_delivery_date": "2022-05-12 14:48:45 -0400",
                "min_delivery_date": "2022-05-12 14:48:45 -0400",
                "service_code": "ON",
                "service_name": "Yolo",
                "total_price": "15"
              },
              {
                "currency": "USD",
                "max_delivery_date": "2022-05-22 14:48:45 -0400",
                "min_delivery_date": "2022-05-11 14:48:45 -0400",
                "service_code": "2D",
                "service_name": "Yolo Overnight",
                "total_price": "25"
              },
              {
                "currency": "USD",
                "max_delivery_date": "2022-05-14 14:48:45 -0400",
                "min_delivery_date": "2022-05-12 14:48:45 -0400",
                "service_code": "1D",
                "service_name": "Yololololo",
                "total_price": "35"
              }
            ]
          })
    }
    
}