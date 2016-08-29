import React from 'react'
import ReactDOM from 'react-dom'

import HexMetrics from './components/HexMetrics'

export default class Metrics {
  constructor(geos, mouseDownCb) {
    this.geos = geos
    this.onAddTileMouseDown = mouseDownCb
    this._setUpMetrics()
  }

  _setUpMetrics() {
    const container = document.createElement('div')
    container.id = 'metrics'
    document.body.appendChild(container)
  }

  renderMetrics(tiles, originalTilesLength) {
    ReactDOM.render(
      (
        <HexMetrics
          geos={this.geos}
          tiles={tiles}
          originalTilesLength={originalTilesLength}
          onAddTileMouseDown={this.onAddTileMouseDown.bind(this)} />
      ),
      document.getElementById('metrics')
    )
  }
}