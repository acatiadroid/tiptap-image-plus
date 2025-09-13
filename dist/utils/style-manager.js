import { CONSTANTS } from '../constants';
import { utils } from './index';
export class StyleManager {
    static getContainerStyle(inline, width) {
        const baseStyle = `width: ${width || '100%'}; height: auto; cursor: pointer;`;
        const inlineStyle = inline ? 'display: inline-block;' : '';
        return `${baseStyle} ${inlineStyle}`;
    }
    static getWrapperStyle(inline) {
        return inline ? 'display: inline-block; float: left; padding-right: 8px;' : 'display: flex';
    }
    static getPositionControllerStyle(inline) {
        const width = inline ? '66px' : '100px';
        return `
      position: absolute; 
      top: 15px; 
      left: 50%; 
      width: ${width}; 
      height: ${CONSTANTS.CONTROLLER_HEIGHT}; 
      z-index: 999; 
      background-color: ${CONSTANTS.COLORS.BACKGROUND}; 
      border-radius: 3px; 
      border: 1px solid ${CONSTANTS.COLORS.BORDER}; 
      cursor: pointer; 
      transform: translate(-50%, -50%); 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      padding: 0 6px;
    `
            .replace(/\s+/g, ' ')
            .trim();
    }
    static getDotStyle(index) {
        const dotPosition = utils.getDotPosition();
        const dotSize = utils.getDotSize();
        const positions = [
            `top: ${dotPosition}; left: ${dotPosition}; cursor: nwse-resize; z-index: 999;`,
            `top: ${dotPosition}; right: ${dotPosition}; cursor: nesw-resize; z-index: 999;`,
            `bottom: ${dotPosition}; left: ${dotPosition}; cursor: nesw-resize; z-index: 999;`,
            `bottom: ${dotPosition}; right: ${dotPosition}; cursor: nwse-resize; z-index: 999;`,
        ];
        return `
      position: absolute; 
      width: ${dotSize}px; 
      height: ${dotSize}px; 
      border: 1.5px solid ${CONSTANTS.COLORS.BORDER}; 
      border-radius: 50%; 
      box-shadow: 2px 2px 5px black;
      background-color: white;
      ${positions[index]}
    `
            .replace(/\s+/g, ' ')
            .trim();
    }
}
