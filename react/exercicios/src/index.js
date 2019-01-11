import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'


ReactDOM.render(
    <div>
        <Pai nome="João" sobrenome="Cidão">
            {/* Como passo os componentes filhos aqui */}
        </Pai>

    </div>
, document.getElementById('root'))