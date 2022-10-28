import * as React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  View as DView,
  Text as DText,
  Button as DButton,
  TextInput as DInput,
  RefreshControl,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled, {css} from 'styled-components/native';
var _ = require('lodash');
import {FontStyles, Sizes, Colors, Width} from '~themes';

// =============START CREATE MY COMPONENTS=============
export const StaticContainer = props => (
  <View
    style={[
      {
        backgroundColor: Colors.white,
        alignItems: 'center',
        width: Width,
        flex: 1,
      },
      props.style,
    ]}>
    {props.children}
  </View>
);
export const StaticContent = props => (
  <ScrollView
    bounces={props.bounces || false}
    onScroll={props.onScroll}
    scrollEnabled={props.scrollEnabled}
    refreshControl={
      props.bounces && (
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      )
    }
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={[
      {alignItems: 'center', width: Width},
      props.contentContainerStyle,
    ]}
    style={[{backgroundColor: Colors.white}, props.style]}>
    {props.children}
  </ScrollView>
);

//view
export const View = styled(DView)`
  padding=0;
  margin;0;
  ${props => include(props)}
`;
//line
export const LineThick = styled(DView)`
  border-top-width: 5px;
  border-color: ${Colors.border};
  align-self: center;
  width: ${Width || props.width};
  ${props => include(props)}
`;
export const LineThin = styled(DView)`
  border-top-width: 1px;
  border-color: ${Colors.border};
  align-self: center;
  width: ${Width || props.width};
  margin-vertical: 5px ${props => include(props)};
`;
export const Line = styled(DView)`
  ${props => include(props)}
  border: ${Sizes.border}px;
  width: ${Width || props.width};
  background-color: ${Colors.border};
  ${props => include(props)}
`;

//input
export const FormInput = styled(DInput)`
  font-size: ${Sizes.normal};
  height: ${Sizes.input};
  background-color: ${Colors.white};
  border-width: 1px;
  border-color: ${Colors.border};
  border-radius: ${Sizes.input / 2};
  ${props => include(props)}
`;
export const FormInputNoBorder = styled(DInput)`
  font-size: ${Sizes.normal};
  height: ${Sizes.input};
  border-width: 0;
  ${props => include(props)}
`;
export const FormInputBottomBorder = styled(DInput)`
  font-size: ${Sizes.normal};
  height: ${Sizes.input};
  border-bottom-width: 1px;
  border-color: ${Colors.border};
  ${props => include(props)}
`;
//text
export const Label = styled(DText)`
  font-weight: bold;
  font-size: ${Sizes.normal};
  color: ${Colors.lightDark};
  background-color: rgba(0, 0, 0, 0);
  font-family: ${FontStyles.NotoSansRegular};
  ${props => include(props)}
`;
export const Text = styled(DText)`
  text-align: justify
  font-size: ${Sizes.normal};
  color: ${Colors.dark};
  background-color:rgba(0, 0, 0, 0);
  font-family:${FontStyles.NotoSansRegular};
  ${props => include(props)}
`;
export const Title = styled(DText)`
  font-size: ${Sizes.normal};
  color: ${Colors.dark};
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  font-family: ${FontStyles.NotoSansRegular};
  ${props => include(props)}
`;
export const H1 = styled(DText)`
  font-size: ${Sizes.master};
  color: ${Colors.dark};
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  font-family: ${FontStyles.NotoSansRegular};
  ${props => include(props)}
`;
export const H2 = styled(DText)`
  font-size: ${Sizes.large};
  color: ${Colors.dark};
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  font-family: ${FontStyles.NotoSansRegular};
  ${props => include(props)}
`;
export const FormInputArea = styled(DText)`
  color: ${Colors.dark};
  margin: 10px 0px 10px 0px;
  border-width: 1px;
  border-color: ${Colors.border};
  font-size: ${Sizes.normal};
  height: ${Sizes.input * 2}px;
  border-radius: 3px;
  font-style: normal;
  line-height: ${Sizes.normal};
  ${props => include(props)}
`;

//button
export const ButtonGroup = styled(DView)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 100%;
  ${props => include(props)}
`;
export const Button = styled(DButton)`
  ${props => include(props)}
`;

//image
export const ImgView = styled(ImageBackground)`
  ${props => include(props)}
`;
export const Image = styled(FastImage)`
  ${props => include(props)}
`;
//other
export const ClickView = styled(TouchableOpacity)`
  ${props => include(props)}
`;
export const Spinner = styled(ActivityIndicator)`
  padding: 0;
  margin: 0;
  font-size: ${Sizes.normal}px;
  color: ${Colors.default};
  ${props => include(props)}
`;
// =============END=============

export const include = props => {
  let _css = '';
  _.forEach(props, (v, k) => {
    if (k != '0' && k != 0) {
      _css += renderCss(k, v);
    }
  });
  return css`
    ${_css}
  `;
};

const renderCss = (k, v) => {
  switch (k) {
    case 'flex':
      return `
      flex:${v};
    `;
    case 'row':
      return `
      flex-direction:row;
    `;
    case 'column':
      return `
      flex-direction:column;
    `;
    case 'flex-center':
      return `
      justify-content:center;
      align-items:center;
    `;
    case 'flex-end':
      return `
      justify-content:flex-end;
      align-items:flex-end;
    `;
    case 'flex-between':
      return `
      justify-content:space-between;
      align-items:center;
    `;
    case 'flex-around':
      return `
      justify-content:space-around;
      align-items:center;
    `;
    case 'justifyContent':
      return `
      justify-content:${v};
    `;
    case 'alignItems':
      return `
      align-items:${v};
    `;
    case 'alignContent':
      return `
      align-content:${v};
    `;
    case 'alignSelf':
      return `
      align-self:${v};
    `;
    case 'nopadding':
      return `
      padding:0;
    `;
    case 'padding':
      return `
      padding:${v}px;
    `;
    case 'paddingX':
      return `
      padding-left:${v}px;
      padding-right:${v}px;
    `;
    case 'paddingY':
      return `
      padding-top:${v}px;
      padding-bottom:${v}px;
    `;
    case 'nomargin':
      return `
      margin:0;
    `;
    case 'margin':
      return `
      margin:${v}px;
    `;
    case 'marginX':
      return `
      margin-left:${v}px;
      margin-right:${v}px;
    `;
    case 'marginY':
      return `
      margin-top:${v}px;
      margin-bottom:${v}px;
    `;
    case 'width':
      return `
      width:${v}px;
    `;
    case 'height':
      return `
      height:${v}px;
    `;
    case 'bgColor':
      return `
      background-color:${v};
    `;
    case 'size':
      return `
      width:${v}px;
      height:${v}px;
    `;
    case 'fontSize':
      return `
      font-size:${v}px;
      line-height:${v};
    `;
    case 'lineHeight':
      return `
      line-height:${v};
    `;
    case 'transparent':
      return `
      background-color:rgba(0, 0, 0, 0);
    `;
    case 'opacity':
      return `
      opacity:${v}
    `;
    case 'rounded':
      return `
      border-radius:20px;
      overflow:hidden;
    `;
    case 'noborder':
      return `
      border-width:0;
    `;
    case 'border':
      return `
      border-width:${v}px;
      border-color:${Colors.border};
    `;
    case 'borderColor':
      return `
      border-color:${v};
    `;
    case 'radius':
      return `
      border-radius:${v};
    `;
    case 'noShadow':
      return `
      elevation:0
    `;
    case 'shadow':
      return `
      elevation:${Sizes.shadow};
      box-shadow: 0px ${Sizes.shadow}px ${Sizes.shadow}px ${Colors.dark};
      shadow-opacity: 0.37;
    `;
    case 'textAlign':
      return `
      text-align:${v};
    `;
    case 'color':
      return `
      color:${v};
    `;
    case 'textDefault':
      return `
      color:${Colors.default};
    `;
    case 'textWhite':
      return `
      color:${Colors.white};
    `;
    case 'textLight':
      return `
      color:${Colors.lightDark};
    `;
    case 'textSecondary':
      return `
      color:#4A4A4A;
    `;
    case 'textDefault':
      return `
      color:${Colors.default};
    `;
    case 'textInfo':
      return `
      color:${Colors.info};
    `;
    case 'textSuccess':
      return `
      color:${Colors.success};
    `;
    case 'textDanger':
      return `
      color:${Colors.danger};
    `;
    case 'textWarning':
      return `
      color:${Colors.warning};
    `;
    case 'textLink':
      return `
      color:${Colors.link};
    `;
    case 'tiny':
      return `
      font-size:${Sizes.tiny};
    `;
    case 'lesser':
      return `
      font-size:${Sizes.lesser};
    `;
    case 'normal':
      return `
      font-size:${Sizes.normal};
    `;
    case 'small':
      return `
      font-size:${Sizes.small};
    `;
    case 'medium':
      return `
    font-size:${Sizes.medium};
    `;
    case 'large':
      return `
    font-size:${Sizes.large};
    `;
    case 'master':
      return `
    font-size:${Sizes.master};
    `;
    case 'overflow':
      return `
      overflow:${v};
    `;
    case 'bold':
      return `
      font-weight: bold;
    `;
    case 'italic':
      return `
      font-style: italic;
    `;
    case 'underline':
      return `
      text-decoration-line: underline;
    `;

    default:
      return ``;
  }
};
