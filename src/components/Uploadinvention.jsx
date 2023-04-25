import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import { P2 } from '../pages/About';
import { Button } from '../pages/Landing';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const Container = styled.div`
display: flex;
background: #FAFAFA;
flex-direction: column;
padding: 60px;
`

const Iframebox = styled.div`
display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 410px);
  grid-gap: 20px;
  padding: 55px;
align-items: flex-start;

iframe{
    width: 400px;
  height: 410px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 10px;
  object-fit: cover;
}
`

const Uploadinvention = () => {
    const [name, setName] = useState("");
    const [siteId, setSiteId] = useState(null);
    const [deployFormData, setDeployFormData] = useState(new FormData());
    const [loading , setLoading] = useState(false)
    const [sites, setSites] = useState([]);
    useEffect(()=> {
        console.log('working')
        setLoading(true)
        // get list of all swfit xr projects
        fetch('https://api.swiftxr.io/v1/sites/list',{
            method: 'GET',
            headers:{
                "Authorization" : "Bearer SWF.7j6EBQIKQ8PBLg.M7KeWxbzaFIQga37fB17j9WkKe1FmgBxy0F2QlKyUkI",
                "Content-Type" : "application/json"
            }
            
        }).then(response=> response.json())
        .then((res) => {
            console.log(res);
            setLoading(false)
            setSites(res.sites);
            
        })
        .catch(error => console.error(error));
    },[]);
  
       function handleFileChange(event) {
        const file = event.target.files[0];
        const newFormData = new FormData();
        newFormData.append('deploy', file);
        setDeployFormData(newFormData);
      }
       const handleSubmit = (e) =>{
        e.preventDefault();
        const uploadFile = deployFormData;

        // set the site configs

        fetch('https://api.swiftxr.io/v1/sites/',{
            method: 'POST',
            headers:{
                "Authorization" : "Bearer SWF.7j6EBQIKQ8PBLg.M7KeWxbzaFIQga37fB17j9WkKe1FmgBxy0F2QlKyUkI",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "site_name": name,
                "config": {
                  "type": "model",
                  "logo_url": "",
                  "compress_model": true,
                  "model_compression_level": 5,
                  "compress_image": true,
                  "image_compression_level": 5,
                  "use_ar": true
                }
              })
        })
        .then(response=> response.json())
        .then((res)=>{
            console.log(res);
            const site_id = res?.site?.site_id
            setSiteId(res?.site?.site_id);
            console.log('Gotten site Id: ' + site_id);
             //upload the 3d model to the site

        fetch('https://api.swiftxr.io/v1/sites/deploy/'+ site_id,{
            method: 'POST',
            headers:{
                "Authorization" : "Bearer SWF.7j6EBQIKQ8PBLg.M7KeWxbzaFIQga37fB17j9WkKe1FmgBxy0F2QlKyUkI",
            },
            body: deployFormData
        })
        .then(response=> response.json())
        .then((res)=>{
            console.log(res);

            const site_url = res?.site?.site_url;
            console.log('Gotten Site URL:'+site_url);
        })
        })
        

       }
  return (
    <Container>
        <div>
     <form onSubmit={handleSubmit}>
     <input 
     type='text'
      required
      name="site_name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      /> 
       <input type="file" onChange={handleFileChange} />
      <button>Publish 3D model</button>
            </form>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '1rem' }}>
      { loading ? <Spinner/> : sites.map(site => (
        <div>
        <div key={site.id} style={{ maxWidth: '400px', height: '410px' }}>
          <iframe src={site.site_url} style={{ width: '100%', height: '100%', border: 'none' }} />
        </div>
          <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
          <p style={{color:'#3A4F5C'}}>67 layers Damascus steel with a VG10 steel core. Danish design. Built to last a lifetime.</p>
          <Link to="/Invention"> <Button style={{cursor:'pointer'}}>View</Button></Link>
          </div>
          </div>
      ))}
    </div>
     
    </Container>  
  )
}

export default Uploadinvention
