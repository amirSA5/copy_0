import React from 'react';
import Button from '@mui/material/Button';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import './Home.css'
import {Link} from 'react-router-dom';




function Home() {

  return (

    <div className='Home'>
        <h1 className='title_Home'>Bienvenu</h1>
        <table className='Home_Table'>
          <tbody>
            <tr className='tr_Home_table'>
              <td className='td_Home_Table'>
                <Link to='/step1_devis'>
                  <Button className='calcul_devis' size='large' variant="contained" color="success">
                    <CalculateOutlinedIcon/>  Calcul Devis
                  </Button>
                </Link>
              </td>
              <td className='td_Home_Table'>
                <Link to='/parametres_profiler'>
                  <Button className='paramétres_profiler' size='large' variant="contained" color="secondary">
                    <SettingsOutlinedIcon />  Paramétres Profiler
                  </Button>
                </Link>
              </td>
              <td className='td_Home_Table'>
                <Link to='/Historique_devis'>
                  <Button className='historique_devis' size='large' variant="contained" color="error">
                    <WorkHistoryOutlinedIcon/>  Historiques
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    
  )
}

export default Home;

