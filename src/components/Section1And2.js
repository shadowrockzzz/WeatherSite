import React, { useState } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
import Section3And4 from './Section3And4';

function Section1And2(props) {

    const [para,paramschange] = useState({response : ""});

    const [idForSec3,idForSec3Change] =useState(0)

    const [idForSec4,idForSec4Change] =useState(0)

    const [para2,paramsChange2] =useState({response:""})



    function handleClickEvent(){

        props.coverFunc(true)

        let elem = document.getElementById('location');

        let elemValue = elem.value;

        if(elemValue===""){
          alert("Please Enter Location");

          props.coverFunc(false);

        }
        else{
            let reqOptions = {
                method: "GET",
                url: "https://api.weatherapi.com/v1/forecast.json",
                params: {
                  key: "71af671d14ae4ed086f192852221606",
                  q: elemValue,
                  days: "3",
                  aqi: "yes",
                  alerts: "yes",
                },
                headers: {
                  "Transfer-Encoding": "chunked",
                  "Connection": "keep-alive",
                  "Vary": "Accept-Encoding",
                  "CDN-PullZone": "93447",
                  "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
                  "CDN-RequestCountryCode": "GB",
                  "CDN-ProxyVer": "1.02",
                  "CDN-RequestPullSuccess": "True",
                  "CDN-RequestPullCode": "200",
                  "CDN-CachedAt": "07/27/2022 18:07:57",
                  "CDN-EdgeStorageId": "946",
                  "CDN-Status": "200",
                  "CDN-RequestId": "68124d14676355f36466ac702bff3a38",
                  "CDN-Cache": "MISS",
                  "Cache-Control": "public, max-age=180",
                  "Content-Type": "application/json",
                  "Date": "Wed, 27 Jul 2022 18:07:57 GMT",
                  "Server": "BunnyCDN-FR-951"                 
                },
              };
              
              axios
                .request(reqOptions)
                .then((res) => {
                    paramschange({
                        response : res
                    })
                    props.coverFunc(false)
                })
                
                .catch((err) => {
                  console.log(err);
                });

                let reqOptions1 ={
                  method:"GET",
                  url : "https://api.weatherapi.com/v1/current.json",
                  params :{
                    key :"71af671d14ae4ed086f192852221606",
                    q :elemValue,
                    aqi :"yes"
                  },
                  headers :{

                    "Transfer-Encoding": "chunked",
                    "Connection": "keep-alive",
                    "Vary": "Accept-Encoding",
                    "CDN-PullZone": "93447",
                    "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
                    "CDN-RequestCountryCode": "GB",
                    "CDN-ProxyVer": "1.02",
                    "CDN-RequestPullSuccess": "True",
                    "CDN-RequestPullCode": "200",
                    "CDN-CachedAt": "08/15/2022 11:58:51",
                    "CDN-EdgeStorageId": "946",
                    "CDN-Status": "200",
                    "CDN-RequestId": "c970bf0f5a507cdec808ef93a2d68bae",
                    "CDN-Cache": "MISS",
                    "Cache-Control": "public, max-age=180",
                    "Content-Type": "application/json",
                    "Date": "Mon, 15 Aug 2022 11:58:51 GMT",
                    "Server": "BunnyCDN-FR-951"
                    
                  }
                }

                axios.request(reqOptions1).then((res)=>{
                  paramsChange2({response:res})
                }).catch((err)=>{console.log(err)})
            }
          
    }

    function handleClickEventForSection3(e){

      idForSec3Change(parseInt(e.target.id)-1)

    }

    function handleSec4(e){

      idForSec4Change(parseInt(e.target.id)-1)

    }

        return (

            <div className='FullContainer' >
        
            <Section1 func={handleClickEvent} response={para2}/>

            <ErrorBoundary>

              <Section2 response={para} handleClickEventForSection3={handleClickEventForSection3}/>

            </ErrorBoundary>

            <Section3And4 response={para} idForSec3={idForSec3} idForSec4={idForSec4} handleSec4={handleSec4}/>

            </div>
        
          )

    }
export default Section1And2