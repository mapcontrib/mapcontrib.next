import { Map as OsmUIMap } from 'osm-ui-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { setMapZoom } from 'actions/map';
import LayerManager from 'components/LayerManager';
import { IState as ISourcesState } from 'reducers/sources';
import { ILayer, ITileSource } from 'types';

const StyledMap = styled(OsmUIMap)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export interface IProps extends RouteComponentProps<any> {
  layers?: ILayer[];
  maxZoom: number;
  minZoom: number;
  openOsmose: (id: string) => void;
  setMapZoom: typeof setMapZoom;
  sources?: ISourcesState;
  submittedErrors?: string[];
  tileSources: ITileSource[];
  zoom: number;
}

class ThemeMap extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    layers: [],
    sources: {},
    submittedErrors: [],
  };

  public componentDidMount() {
    this.props.setMapZoom(this.props.zoom + 1);
    this.props.setMapZoom(this.props.zoom - 1);
  }

  public render() {
    const {
      zoom,
      minZoom,
      maxZoom,
      tileSources,
      layers,
      submittedErrors,
      sources,
      openOsmose,
      ...props
    } = this.props;

    return (
      <StyledMap
        center={[44.8637226, -0.6212462]}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        onZoomend={this.handleZoomend}
        attributionControl={false}
        zoomControl={false}
        // whenReady={this.updateLayers}
        {...props}
      >
        {tileSources.map(tileSource => (
          <OsmUIMap.TileLayer
            key={tileSource.id}
            url={tileSource.urlTemplate}
            attribution={tileSource.attribution}
            minZoom={tileSource.minZoom}
            maxZoom={tileSource.maxZoom}
          />
        ))}
        <OsmUIMap.AttributionControl position="bottomleft" />
        <OsmUIMap.ScaleControl position="bottomleft" />
        <LayerManager
          layers={layers}
          sources={sources}
          openOsmose={openOsmose}
          submittedErrors={submittedErrors}
        />
      </StyledMap>
    );
  }

  private handleZoomend = e => {
    this.props.setMapZoom(e.target._zoom);
  };
}

export default ThemeMap;
