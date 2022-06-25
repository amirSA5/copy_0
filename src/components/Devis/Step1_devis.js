import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add'
import TextField from '@mui/material/TextField'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import './Step1_devis.css'
import ArticleItem from './articleItem/ArticleItem';
import {Link} from 'react-router-dom';


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height : 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleArticleDetails = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height : 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

const ariaLabel = { 'aria-label': 'description' }

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function Step1_devis() {

  const [open, setOpen] = useState(false);

  const [article , setArticle] = useState({Nom : ''})

  const [listeArticle, setListeArticle] = useState([])

  const [images, setImages] = useState(false)

  const [openArticle, setOpenArticle] = useState(false);

  const [traiterArticle,setTraiterArticle] = useState([])

  const [name,setName] = useState('')

  const [sousArticle,setSousArticle] = useState('')

  const [profilerD, setTProfilerD] = useState([])
  const [profilerOV, setTProfilerOV] = useState([])
  const [profilerSocolBas, setTProfilerSocolBas] = useState([])
  const [profilerAccessoire, setTProfilerAccessoire] = useState([])



  const [Next,setNext]= useState(false)



 



  useEffect(data=>{
        axios.get('http://localhost:4000/app/Liste_articles').then(res =>{
           const articles = res.data
           setListeArticle(articles)  
          })
  },[listeArticle,article])  

  const handleCheck = (id) =>{
        listeArticle.forEach(product => {
            if(listeArticle._id === id) listeArticle.checked = !listeArticle.checked
        })
        setListeArticle([...listeArticle])
    }

  const deleteArticle = async(id,public_id) => {
        try {
            const destroyImg = axios.post('http://localhost:4000/app/destroy', {public_id})
            const deleteArticle = axios.delete(`http://localhost:4000/app/deleteArticle/${id}`)

            await destroyImg
            await deleteArticle
            window.location.reload()

            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleOpenArticle = (e) => {
      try {

        setOpenArticle(true);
        var Nom = e
        setName(Nom)
        if(Nom==='Porte Fenétre'){
          axios.get('http://localhost:4000/app/Get_PorteFen').then(res =>{
          const PorteFen = res.data
          setTraiterArticle(PorteFen)  
          })
          
        }
        
        
      } catch (error) {
         alert(error.response.data.msg)
      }
  }
  
  const handleUpload = async e =>{
        e.preventDefault()
        try {
            const file = e.target.files[0]
            console.log(file)
            if(!file) return alert("File not exist.")

            if(file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            const res = await axios.post('http://localhost:4000/app/upload', formData, {
                headers: {'content-type': 'multipart/form-data'}
            })
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }


  const handleChangeInput = e =>{
        const {name, value} = e.target
        setArticle({...article, [name]:value})
    }

  const handleChangesousArticle = e =>{
      setSousArticle(e.target.value);
  }

  const handleClose = () =>{
    setOpen(false)
  }

  const handleCloseArticle = () =>{
    setOpenArticle(false)
  }

  const nextDetails = () =>{
    try {
      
      setOpenArticle(false)
      setNext(true)
      if(sousArticle==='Porte Fenétres a la Française'){
          axios.get('http://localhost:4000/app/Get_PorteFenFrancais_Profiler_D').then(res =>{
          const profiler = res.data
          setTProfilerD(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenFrancais_Profiler_OV').then(res =>{
          const profiler = res.data
          setTProfilerOV(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenFrancais_Profiler_SocolBas').then(res =>{
          const profiler = res.data
          setTProfilerSocolBas(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenFrancais_Profiler_Accessoires').then(res =>{
          const profiler = res.data
          setTProfilerAccessoire(profiler)  
          })  
        }
        if(sousArticle==='Porte Fenétres Colissante 567'){
          axios.get('http://localhost:4000/app/Get_PorteFenColissante_576_Profiler_D').then(res =>{
          const profiler = res.data
          setTProfilerD(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenColissante_576_Profiler_OV').then(res =>{
          const profiler = res.data
          setTProfilerOV(profiler)  
          })


          axios.get('http://localhost:4000/app/Get_PorteFenColissante_576_Profiler_Acc').then(res =>{
          const profiler = res.data
          setTProfilerAccessoire(profiler)  
          })  

          setTProfilerSocolBas([])
        }
         if(sousArticle==='Porte Fenétres Colissante 580'){
          axios.get('http://localhost:4000/app/Get_PorteFenColissante_580_Profiler_D').then(res =>{
          const profiler = res.data
          setTProfilerD(profiler)  
          })

          axios.get('http://localhost:4000/app/Get_PorteFenColissante_580_Profiler_OV').then(res =>{
          const profiler = res.data
          setTProfilerOV(profiler)  
          })


          axios.get('http://localhost:4000/app/Get_PorteFenColissante_576_Profiler_Acc').then(res =>{
          const profiler = res.data
          setTProfilerAccessoire(profiler)  
          })  

          setTProfilerSocolBas([])
        }
    } catch (error) {
      
    }
    
  }
  const handleCloseNext = () =>{
    setNext(false)
  }

  const ajoutArticle = e =>{   
    axios.post('http://localhost:4000/app/Ajout_articles', {...article,images})
      .then(response => console.log(response.data))
    e.preventDefault()
    setOpen(false)     
  };

  return (

    <div className='Step1_devis'>
        <Link to='/'>
          <Button  size='large' variant="contained" color="success"><KeyboardDoubleArrowLeftIcon />RETOUR</Button>
        </Link>
      <div className="articles">
            {
                listeArticle.map(article => {
                    return(<div  key={article.Nom} >
                      <ArticleItem article={article} deleteArticle={deleteArticle} handleOpenArticle={()=>handleOpenArticle(article.Nom)}  handleCheck={handleCheck} />
                    </div>)
                })
            } 
            
      </div>
      <table className='table_icons'>
              <tbody className='tbody_table_icons' key='icon'>
                <tr>
                  <td className='td_table_icons'><Fab color="primary" aria-label="add" onClick={handleOpen}><AddIcon /></Fab></td>
                </tr>
                
              </tbody>
      </table>

      
      
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style} >
          <table className='table_Modal'>
          <tbody>
            <tr className='tr_table_Modal'>
              <td className='td_table_Modal'><TextField label="Filled success" variant="filled" color="success" focused value={article.Nom} name='Nom' onChange={handleChangeInput} /></td>
              <td className='td_table_Modal'><Button onClick={ajoutArticle} size='large' variant="contained" color="success">Ajouter Article</Button></td>
            </tr>
            <tr className='tr_table_Modal'>
              <td className='td_table_Modal'> <input type="file" name="file" id="file_up" onChange={handleUpload}/></td>
              <td className='td_table_Modal' onClick={handleClose}><h2 className='exit_modal'>x</h2></td>
            </tr>
            </tbody>
          </table>
        </Box>
      </Modal>
      <Modal
        hideBackdrop
        open={openArticle}
        onClose={handleCloseArticle}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description">
        <Box sx={styleArticleDetails}>
            <div className='articleDetails'>
              <h1 className='title_Modal'>{name}</h1>
              <FormControl fullWidth className='FormControl'>
                <InputLabel  id="demo-simple-select-label">Selectioner un choix</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sousArticle}
                  label="choix"
                  onChange={handleChangesousArticle}
                >
                {
                  traiterArticle.map(data=>{
                    return(<MenuItem key={data._id} name={data.Nom} value={data.Nom}>{data.Nom}</MenuItem>)
                  })
                }

                </Select>
              </FormControl>
              <table className='table_Details_Modal'>
                <tbody>
                  <tr className='tr_table_Details_Modal'>
                    <td className='td_table_Details_Modal'><Input placeholder="donner votre largeur" required type='number' inputProps={ariaLabel} /></td>
                    <td className='td_table_Details_Modal'><Input placeholder="donner votre hauteur" type='number' inputProps={ariaLabel} /></td>
                  </tr>
              </tbody>
              </table>
              <table className='table_quantite'>
                <tbody>
                  <tr>
                    <td><TextField fullWidth id="outlined-number" label="quntité" type="number" InputLabelProps={{ shrink: true,}}/></td>
                </tr>
               </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td><Button onClick={nextDetails}  size='large' variant="contained" color="success">suivant</Button></td>
                    <td><Button onClick={handleCloseArticle} size='large' variant="contained" color="error">Fermer</Button></td>
                  </tr>
                </tbody>
              </table>
          </div>
        </Box>
        
      </Modal>
       <Modal
        hideBackdrop
        open={Next}
        onClose={handleCloseNext}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description">
        <Box sx={styleArticleDetails}>
            <div>
              <table className='table_next'>
                <tbody>
                  <tr>
                    <td className='td_table_next'>D :</td>
                    {
                      profilerD.map(data=>{
                        return(<td className='td_table_next' key={data._id}>{data.D}<Checkbox {...label} /></td>)
                      })
                    }
                  </tr>
                  <tr>
                    <td className='td_table_next'>OV :</td>
                    {
                      profilerOV.map(data=>{
                        return(<td className='td_table_next' key={data._id}>{data.OV}<Checkbox {...label} /></td>)
                      })
                    }
                  </tr>
                  <tr>
                    <td className='td_table_next'>SocleBas :</td>
                    {
                      profilerSocolBas.map(data=>{
                        return(<td className='td_table_next' key={data._id}>{data.SocolBas}<Checkbox {...label} /></td>)
                      })
                    }
                  </tr>
                  <tr>
                    <td className='td_table_next'>Accessoire :</td>
                    {
                      profilerAccessoire.map(data=>{
                        return(<td className='td_table_next' key={data._id}>{data.Accessoire}</td>)
                      })
                    }
                  </tr>
                </tbody>
              </table>
              <div className='table_btn_next'>
                <table className='table_next'>
                  <tbody>
                    <tr>
                      <td className='td_table_Details_Modal'><Button  size='large' variant="contained" color="success">ajouter au devis</Button></td>
                      <td className='td_table_Details_Modal'><Button onClick={()=>setNext(false)} size='large' variant="contained" color="error">Fermer</Button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </Box>
        
      </Modal>
      
    </div>

  )
}

export default Step1_devis