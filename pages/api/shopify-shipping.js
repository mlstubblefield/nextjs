

export default function handler(req, res) {
    console.log(JSON.stringify(req.body, null, 2))
    if(req.body?.rate?.items?.some(x => x.sku == "matt12345")){
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
    }else{
        res.status(200).json({
            "rates": [
              {
                "currency": "CAD",
                "description": "This is the fastest option by farrrrrrrrrrrrrrrrr",
                "max_delivery_date": "2022-05-12 14:48:45 -0400",
                "min_delivery_date": "2022-05-12 14:48:45 -0400",
                "service_code": "ONASDASF",
                "service_name": "YoloYOOLO",
                "total_price": "1295"
              },
              {
                "currency": "USD",
                "max_delivery_date": "2022-05-22 14:48:45 -0400",
                "min_delivery_date": "2022-05-11 14:48:45 -0400",
                "service_code": "2DDDD",
                "service_name": "Yolo Overnightttt",
                "total_price": "2934"
              },
              {
                "currency": "USD",
                "max_delivery_date": "2022-05-14 14:48:45 -0400",
                "min_delivery_date": "2022-05-12 14:48:45 -0400",
                "service_code": "1DDDDDDDAFASFD",
                "service_name": "Yolololollolololoo",
                "total_price": "3587"
              }
            ]
          })
    }
    
}