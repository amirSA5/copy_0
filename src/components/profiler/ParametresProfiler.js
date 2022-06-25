import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from 'react-router-dom';
import './ParametresProfiler.css'

function ParametresProfiler() {

    const [article,setArticle]=useState([])

    const [nomArticle,setNomArticle]=useState('')

    const [sousArticle,setSousArticle]=useState([])

    const [profilerD,setPofilerD]=useState([])
    const [profilerOV,setPofilerOV]=useState([])
    const [profilerSocolBas,setPofilerSocolBas]=useState([])
    const [profilerAcc,setPofilerACC]=useState([])

    const [nomSousArticle,setNomSousArticle]=useState('')


    useEffect(data=>{
      axios.get('http://localhost:4000/app/Liste_articles').then(res =>{
           const articles = res.data
           setArticle(articles)  
          })
    })

    const afficherSousArticle =(Nom) =>{
      try {
        setNomArticle(Nom)
        if(Nom==='Porte Fenétre'){
          axios.get('http://localhost:4000/app/Get_PorteFen').then(res =>{
          const PorteFen = res.data
          setSousArticle(PorteFen)  
          })
        }
      } catch (error) {
         alert(error.response.data.msg)
      }
      
    }

    const afficherProfiler=(Nom)=>{
      try {
          setNomSousArticle(Nom)
          if(Nom==='Porte Fenétres a la Française'){
            axios.get('http://localhost:4000/app/Get_PorteFenFrancais_Profiler_D').then(res =>{
          const profiler = res.data
          setPofilerD(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenFrancais_Profiler_OV').then(res =>{
          const profiler = res.data
          setPofilerOV(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenFrancais_Profiler_SocolBas').then(res =>{
          const profiler = res.data
          setPofilerSocolBas(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenFrancais_Profiler_Accessoires').then(res =>{
          const profiler = res.data
          setPofilerACC(profiler)  
          })  
          }

          if(Nom==='Porte Fenétres Colissante 567'){
          axios.get('http://localhost:4000/app/Get_PorteFenColissante_576_Profiler_D').then(res =>{
          const profiler = res.data
          setPofilerD(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenColissante_576_Profiler_OV').then(res =>{
          const profiler = res.data
          setPofilerOV(profiler)  
          })


          axios.get('http://localhost:4000/app/Get_PorteFenColissante_576_Profiler_Acc').then(res =>{
          const profiler = res.data
          setPofilerACC(profiler)  
          })  

          setPofilerSocolBas([])
        }

        if(Nom==='Porte Fenétres Colissante 580'){
          axios.get('http://localhost:4000/app/Get_PorteFenColissante_580_Profiler_D').then(res =>{
          const profiler = res.data
          setPofilerD(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenColissante_580_Profiler_OV').then(res =>{
          const profiler = res.data
          setPofilerOV(profiler)  
          })


          axios.get('http://localhost:4000/app/Get_PorteFenColissante_576_Profiler_Acc').then(res =>{
          const profiler = res.data
          setPofilerACC(profiler)  
          })  

          setPofilerSocolBas([])
        }
        
      } catch (error) {
        
      }
      
    }
  return (
    <div className='parametres'>
      <Link to='/'>
          <Button  size='large' variant="contained" color="success"><KeyboardDoubleArrowLeftIcon />RETOUR</Button>
      </Link>
        <h1 className='title_parametres'>Paramétres Profiler</h1>
        <table className='parametres_Table'>
          <tbody>
            <tr className='tr_parametres_Table'>
              {article.map(data=>{
                return(<td key={data._id}><Button onClick={()=>afficherSousArticle(data.Nom)} className='paramétres_profiler' size='large' variant="contained" color="secondary">{data.Nom}</Button></td>)
              })}
            </tr>
          </tbody>
        </table>
        
        <h2 className='title_parametres' >{nomArticle}</h2>
        
        <table className='parametres_Table'>
          <tbody>
            <tr className='tr_parametres_Table'>
              {sousArticle.map(data=>{
                return(<td key={data._id}><Button onClick={()=>afficherProfiler(data.Nom)} className='paramétres_profiler' size='large' variant="contained" color="success">{data.Nom}</Button></td>)
              })}
            </tr>
          </tbody>
        </table>

        <h2 className='title_parametres' >{nomSousArticle}</h2>

        <div>
              <table className='parametres_Table'>
                <tbody>
                  <tr>
                    <td className='td_table_next'>D :</td>
                    {
                      profilerD.map(data=>{
                        return(<td className='td_table_next' key={data._id}>{data.D}</td>)
                      })
                    }
                  </tr>
                  <tr>
                    <td className='td_table_next'>OV :</td>
                    {
                      profilerOV.map(data=>{
                        return(<td className='td_table_next' key={data._id}>{data.OV}</td>)
                      })
                    }
                  </tr>
                  <tr>
                    <td className='td_table_next'>SocleBas :</td>
                    {
                      profilerSocolBas.map(data=>{
                        return(<td className='td_table_next' key={data._id}>{data.SocolBas} </td>)
                      })
                    }
                  </tr>
                  <tr>
                    <td className='td_table_next'>Accessoire :</td>
                    {
                      profilerAcc.map(data=>{
                        return(<td className='td_table_next' key={data._id}>{data.Accessoire}</td>)
                      })
                    }
                  </tr>
                </tbody>
              </table>
            </div>
        
    </div>
  )
}

export default ParametresProfiler