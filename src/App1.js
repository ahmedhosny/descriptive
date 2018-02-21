import Immutable from 'immutable';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {generateRandomList} from './demo/utils';
import {
  ContentBox,
  ContentBoxHeader,
  ContentBoxParagraph,
} from './demo/ContentBox';
import {LabeledInput, InputRow} from './demo/LabeledInput';
import {Masonry, AutoSizer,WindowScroller,CellMeasurer,CellMeasurerCache} from 'react-virtualized';
import createCellPositioner from './createCellPositioner';
import styles from './App.css';

import ReactList from 'react-list';

export default class App extends PureComponent {


  constructor(props) {
    super(props);

    this._columnCount = 0;

    this._cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true,
    });

    this._columnHeights = {};

    this.state = {
      // columnWidth: 200,
      height: 300,
      gutterSize: 10,
      overscanByPixels: 0,
      windowScrollerEnabled: true,
    };

    this.data = Immutable.List(generateRandomList())

    // this._cellRenderer = this._cellRenderer.bind(this);
    // this._onResize = this._onResize.bind(this);
    this._renderAutoSizer = this._renderAutoSizer.bind(this);
    // this._renderMasonry = this._renderMasonry.bind(this);
    // this._setMasonryRef = this._setMasonryRef.bind(this);

  }


  //
  //
  // _calculateColumnCount() {
  //   const {columnWidth, gutterSize} = this.state;
  //
  //   this._columnCount = 2; // Math.floor(this._width / (columnWidth + gutterSize));
  // }
  //
  // _cellRenderer({index, key, parent, style}) {
  //   const list = this.data;
  //   const {columnWidth} = this.state;
  //
  //   const datum = list.get(index % list.size);
  //
  //   return (
  //     <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
  //       <div
  //         className={styles.Cell}
  //         style={{
  //           ...style,
  //           width: columnWidth,
  //           backgroundColor: 'lightGray'
  //         }}>
  //         <div
  //           style={{
  //             backgroundColor: datum.color,
  //             borderRadius: '0.5rem',
  //             height: 300,// datum.size * 3,
  //             marginBottom: '0.5rem',
  //             width: '100%',
  //             fontSize: 20,
  //             color: 'white',
  //             display: 'flex',
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //           }}>
  //           {index}
  //         </div>
  //         {datum.random}
  //       </div>
  //     </CellMeasurer>
  //   );
  // }
  //
  // _initCellPositioner() {
  //   if (typeof this._cellPositioner === 'undefined') {
  //     const {columnWidth, gutterSize} = this.state;
  //     this._cellPositioner = createCellPositioner({
  //       cellMeasurerCache: this._cache,
  //       columnCount: this._columnCount,
  //       columnWidth,
  //       spacer: gutterSize,
  //     });
  //   }
  // }

  _onResize({width, height}) {
    // this._width = width;
    // this._columnHeights = {};
    // this._calculateColumnCount();
    // this._resetCellPositioner();
    // this._masonry.recomputeCellPositions();
    console.log("width: ", width, 'height:', height)
  }

  _renderAutoSizer() { // {height, scrollTop}
    // this._height = height;
    // this._scrollTop = scrollTop;
    //
    // const {overscanByPixels} = this.state;

    return (
      // <AutoSizer
      //   // disableHeight
      //   // height={height}

      //   overscanByPixels={overscanByPixels}
      //   scrollTop={this._scrollTop}>

      //   // {this._renderMasonry}
      // </AutoSizer>
      //
      <div
      className="parent"
      >
        <AutoSizer
        onResize={this._onResize}
        >
          {this._test}
        </AutoSizer>
      </div>
    );
  }

  _test({width, height}) {
    return (
      <div
      className="child"
      style={{"height" : "50px", "width" : "3000px"}}
      >
      "hi"
      </div>
    );
  }


  //
  //
  // _renderMasonry({width, height}) {
  //   this._width = width;
  //
  //   this._calculateColumnCount();
  //   this._initCellPositioner();
  //
  //   const {overscanByPixels, windowScrollerEnabled} = this.state;
  //
  //   return (
  //     <Masonry
  //       backgroundColor={'#d3d3d3'}
  //       autoHeight={windowScrollerEnabled}
  //       cellCount={6}
  //       cellMeasurerCache={this._cache}
  //       cellPositioner={this._cellPositioner}
  //       cellRenderer={this._cellRenderer}
  //       height={windowScrollerEnabled ? this._height : height}
  //       overscanByPixels={overscanByPixels}
  //       ref={this._setMasonryRef}
  //       scrollTop={this._scrollTop}
  //       width={width}
  //     />
  //   );
  // }
  //
  // // This is a bit of a hack to simulate newly loaded cells
  // _resetList = () => {
  //   const ROW_HEIGHTS = [25, 50, 75, 100];
  //
  //   const list = this.data;
  //   list.forEach(datum => {
  //     datum.size = ROW_HEIGHTS[Math.floor(Math.random() * ROW_HEIGHTS.length)];
  //   });
  //
  //   this._cache.clearAll();
  //   this._resetCellPositioner();
  //   this._masonry.clearCellPositions();
  // };
  //
  // _resetCellPositioner() {
  //   const {columnWidth, gutterSize} = this.state;
  //
  //   this._cellPositioner.reset({
  //     columnCount: this._columnCount,
  //     columnWidth,
  //     spacer: gutterSize,
  //   });
  // }
  //
  // _setMasonryRef(ref) {
  //   this._masonry = ref;
  // }
  //
  //
  //import React, {Component} from 'react';
  // import {render} from 'react-dom';



  // render() {
  //   return (
  //
  //   );
  // }

  render() {
    // const {
    //   columnWidth,
    //   height,
    //   gutterSize,
    //   overscanByPixels,
    //   windowScrollerEnabled,
    // } = this.state;

    // let child;
    //
    // if (windowScrollerEnabled) {
    //   child = (
    //     <WindowScroller overscanByPixels={overscanByPixels}>
    //       {this._renderAutoSizer}
    //     </WindowScroller>
    //   );
    // } else {
    //   child = this._renderAutoSizer({height});
    //   console.log("this")
    // }
    //
    //         // {this._renderAutoSizer()}



      const getWidth = index => 100 + (10 * (index % 10));
      getWidth.toJSON = () => getWidth.toString();


      const renderVariableWidthItem = (index, key) =>
        <div
          key={key}
          className={'item' + (index % 2 ? '' : ' even')}
          style={{width: `${getWidth(index)}px`}}
        >
          {index}
        </div>;
      renderVariableWidthItem.toJSON = () => renderVariableWidthItem.toString();


    return (

      <div
      className="parent"
      >
          <div className='component'>
          <ReactList
            axis={'y'}
            length= {20}
            itemRenderer={renderVariableWidthItem}
           /></div>
      </div>


    );
  }
}




//   <ContentBoxParagraph>
//     <label className={styles.checkboxLabel}>
//       <input
//         aria-label="Use WindowScroller?"
//         checked={windowScrollerEnabled}
//         className={styles.checkbox}
//         type="checkbox"
//         onChange={event => {
//           // HACK Because this demo switches between using WindowScroller and not,
//           // It's easier to clear the cache when toggling modes to avoid a partially stale state.
//           this._cache.clearAll();
//           this.setState({
//             windowScrollerEnabled: event.target.checked,
//           });
//         }}
//       />
//       Use <code>WindowScroller</code>?
//     </label>
//     <label className={styles.checkboxLabel}>
//       <button onClick={this._resetList}>Reset List Data</button>
//     </label>
//   </ContentBoxParagraph>
//
//   <InputRow>
//     <LabeledInput
//       label="Height"
//       name="height"
//       onChange={event => {
//         this.setState({
//           height: parseInt(event.target.value, 10) || 300,
//         });
//       }}
//       value={height}
//     />
//     <LabeledInput
//       label="Column Width"
//       name="columnWidth"
//       onChange={event => {
//         this._columnHeights = {};
//         this._cache.clearAll();
//         this.setState(
//           {
//             columnWidth: parseInt(event.target.value, 10) || 200,
//           },
//           () => {
//             this._calculateColumnCount();
//             this._resetCellPositioner();
//             this._masonry.clearCellPositions();
//           },
//         );
//       }}
//       value={columnWidth}
//     />
//     <LabeledInput
//       label="Gutter Size"
//       name="gutterSize"
//       onChange={event => {
//         this._columnHeights = {};
//         this.setState(
//           {
//             gutterSize: parseInt(event.target.value, 10) || 10,
//           },
//           () => {
//             this._calculateColumnCount();
//             this._resetCellPositioner();
//             this._masonry.recomputeCellPositions();
//           },
//         );
//       }}
//       value={gutterSize}
//     />
//     <LabeledInput
//       label="Overscan (px)"
//       name="overscanByPixels"
//       onChange={event => {
//         this.setState({
//           overscanByPixels: parseInt(event.target.value, 10) || 0,
//         });
//       }}
//       value={overscanByPixels}
//     />
//   </InputRow>
//
//
//
//
//


// class Examples extends Component {
//
// }

// render(<Examples />, document.getElementById('main'));
