import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Step1Devis from './Devis/Step1_devis'
import Historique from './Historique/Historique'
import ParametresProfiler from './profiler/ParametresProfiler'

function RoutesPages() {
  return (
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route exact path='/step1_devis'  element={<Step1Devis />} />
        <Route exact path='/parametres_profiler'  element={<ParametresProfiler />} />
        <Route exact path='/Historique_devis'  element={<Historique />} />

    </Routes>
  )
}

export default RoutesPages