import { Input, Radio, Switch } from 'antd';
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class VideoAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className={"attribute-group" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Video" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">URL</div>
          <div className="value">
            <Input size="small"
              value={this.props.src}
              onChange={(e) => this.props.onChange('src', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Autoplay</div>
          <div className="value">
            <Switch size="small" checked={this.props.videoAutoplay}  onChange={(checked) => this.props.onChange('videoAutoplay', checked)}/>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Loop</div>
          <div className="value">
            <Switch size="small" checked={this.props.videoLoop}  onChange={(checked) => this.props.onChange('videoLoop', checked)}/>
          </div>
        </div>
      </div>
    );
  }
}
VideoAttributeGroup.attributeKeys = [
  'src', 'videoAutoplay', 'videoLoop'
]


        // <div className="attribute">
        //   <div className="name">Height</div>
        //   <div className="value">
        //     <Input size="small"
        //       value={this.props.lineHeight}
        //       onChange={(e) => this.props.onChange('lineHeight', e.target.value)}
        //     />
        //   </div>
        // </div>
        // <div className="attribute">
        //   <div className="name">Align</div>
        //   <div className="value">
        //     <RadioGroup size="small"
        //       onChange={(e) => this.props.onChange('textAlign', e.target.value)}
        //       defaultValue={this.getAlignAttr(this.props.textAlign)}
        //       value={this.getAlignAttr(this.props.textAlign)}>
        //       <RadioButton value="left"><span className="iconfont attribute textalignleft"></span></RadioButton>
        //       <RadioButton value="center"><span className="iconfont attribute textaligncenter"></span></RadioButton>
        //       <RadioButton value="right"><span className="iconfont attribute textalignright"></span></RadioButton>
        //       <RadioButton value="justify"><span className="iconfont attribute textalignjustify"></span></RadioButton>
        //     </RadioGroup>
        //   </div>
        // </div>