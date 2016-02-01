
/* !!!
IF YOU ARE EDITING social-logo/index.jsx
THEN YOU ARE EDITING A FILE THAT GETS OUTPUT FROM THE SOCIAL LOGO REPO!
DO NOT EDIT THAT FILE! EDIT index-header.jsx and index-footer.jsx instead
OR if you're looking to change now SVGs get output, you'll need to edit strings in the Gruntfile :)
!!! */

/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-pure-render/mixin';
import classNames from 'classnames';

export default React.createClass( {
	displayName: 'SocialLogo',
	mixins: [ PureRenderMixin ],

	getDefaultProps() {
		return {
			className: '',
			size: 24
		};
	},

	propTypes: {
		icon: PropTypes.string.isRequired,
		size: PropTypes.number,
		onClick: PropTypes.func,
		className: PropTypes.string
	},

	render() {
		const icon = this.props.icon;

		const iconClass = classNames(
			this.props.className,
			icon,
			'social-logo'
		);
		let svg = null;

		switch ( icon ) {
			default:
				svg = <svg height={ this.props.size } width={ this.props.size } />;
				break;
			case 'amazon':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><g><path d="M13.582 8.182c-1.648.185-3.802.308-5.344.984-1.78.77-3.03 2.337-3.03 4.644 0 2.953 1.86 4.43 4.253 4.43 2.02 0 3.126-.478 4.686-2.066.516.747.685 1.11 1.63 1.894.21.114.482.103.67-.066l.007.006c.567-.505 1.6-1.4 2.18-1.888.23-.188.19-.496.01-.754-.52-.718-1.073-1.303-1.073-2.634V8.305c0-1.876.133-3.6-1.25-4.89C15.23 2.368 13.423 2 12.04 2 9.336 2 6.318 3.01 5.686 6.35c-.068.356.19.543.423.595l2.753.298c.258-.013.445-.266.494-.523.236-1.15 1.2-1.706 2.284-1.706.585 0 1.25.215 1.596.738.398.584.346 1.384.346 2.06v.37zm-.533 5.906c-.452.8-1.17 1.29-1.968 1.29-1.09 0-1.728-.83-1.728-2.06 0-2.42 2.17-2.86 4.227-2.86v.615c.002 1.108.028 2.03-.53 3.015z"/><path d="M20.34 18.79c-2.638 1.118-5.505 1.66-8.114 1.66-3.868 0-7.61-1.062-10.64-2.824-.264-.154-.46.118-.24.317C4.152 20.478 7.86 22 11.98 22c2.937 0 6.35-.924 8.703-2.66.39-.29.056-.72-.342-.55z"/><path d="M22.666 17.454c-.256-.317-2.464-.59-3.81.356-.208.146-.172.347.058.32.76-.092 2.448-.295 2.75.09.3.387-.336 1.975-.62 2.685-.086.215.1.302.293.14 1.262-1.06 1.588-3.272 1.33-3.59z"/></g></g></svg>;
				break;
			case 'blogger-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19.78 9.904h-1.002c-.615 0-1.118-.475-1.16-1.078l-.002-.013c0-3.21-2.602-5.813-5.813-5.813H8.87C5.66 3 3.06 5.602 3.06 8.813v6.375C3.058 18.398 5.66 21 8.87 21h6.258c3.21 0 5.813-2.602 5.813-5.812l.003-4.12c0-.644-.522-1.164-1.164-1.164zM8.725 7.714h3.29c.618 0 1.118.5 1.118 1.116 0 .617-.5 1.117-1.117 1.117h-3.29c-.618 0-1.118-.5-1.118-1.117 0-.616.5-1.117 1.116-1.117zm6.6 8.656H8.72c-.584 0-1.057-.473-1.057-1.057s.473-1.057 1.057-1.057h6.607c.584 0 1.057.473 1.057 1.057s-.473 1.057-1.057 1.057z"/></g></svg>;
				break;
			case 'blogger':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M14.068 13.365h-4.09c-.362 0-.655.293-.655.654s.293.653.654.653h4.09c.362 0 .655-.293.655-.654s-.293-.655-.654-.655zM9.98 10.698h2.04c.38 0 .69-.31.69-.692 0-.382-.31-.692-.69-.692H9.98c-.38 0-.69.31-.69.692 0 .382.31.692.69.692z"/><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-1.457 10.94c0 1.988-1.61 3.6-3.6 3.6H10.07c-1.988 0-3.6-1.61-3.6-3.6V9.996c0-1.988 1.612-3.6 3.6-3.6h1.816c1.988 0 3.6 1.612 3.6 3.6v.008c.026.374.338.668.718.668h.62c.398 0 .72.322.72.72v2.55z"/></g></svg>;
				break;
			case 'codepen':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M22.016 8.84l-.007-.037-.016-.072c-.003-.014-.01-.027-.013-.04l-.022-.063-.02-.042c-.008-.02-.018-.037-.03-.057-.007-.013-.017-.027-.025-.038l-.035-.052-.03-.037-.043-.044c-.01-.012-.022-.023-.035-.035-.015-.014-.032-.027-.048-.04l-.037-.03c-.005-.002-.01-.007-.015-.01l-9.16-6.097c-.29-.192-.667-.192-.956 0L2.36 8.237c-.006.003-.01.008-.016.012l-.038.027-.048.04c-.012.014-.024.025-.036.035-.015.015-.028.03-.042.047-.012.012-.022.022-.03.036-.01.017-.025.035-.035.052l-.025.038-.03.06-.02.04c-.008.022-.015.044-.02.064-.006.013-.01.027-.014.042-.007.023-.01.046-.016.07 0 .015-.005.026-.006.038-.006.04-.01.075-.01.114v6.093c0 .037.004.075.01.112 0 .01.004.024.006.037.005.023.008.047.015.072.003.014.008.027.013.04.007.02.013.04.022.062l.02.04c.008.02.018.038.03.058.007.013.015.027.025.038l.035.052.03.037c.013.015.028.032.042.045l.035.035c.015.013.032.028.048.04l.038.03.013.01 9.163 6.095c.148.1.313.148.48.148.167 0 .332-.047.478-.144l9.163-6.095.016-.01c.013-.01.027-.02.037-.03.018-.012.035-.027.048-.04.014-.01.026-.022.036-.034.017-.015.03-.032.043-.045l.03-.036.034-.052.025-.038.03-.058c.006-.013.012-.027.02-.04l.022-.063c.003-.013.01-.027.013-.04.007-.025.01-.048.015-.072l.007-.036c.003-.042.007-.08.007-.117V8.954c0-.04-.002-.075-.008-.114zm-9.154-4.376l6.75 4.49-3.015 2.013-3.735-2.492v-4.01zm-1.724 0v4.01l-3.735 2.493L4.39 8.954l6.748-4.49zm-7.44 6.098L5.854 12l-2.155 1.438v-2.876zm7.44 8.974l-6.75-4.49 3.016-2.012 3.735 2.492v4.01zm.862-5.5L8.953 12 12 9.966 15.047 12 12 14.035zm.862 5.5v-4.01l3.735-2.49 3.016 2.01-6.75 4.49zm7.44-6.098L18.148 12l2.156-1.438v2.876z"/></g></svg>;
				break;
			case 'digg':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M22 11c0-1.105-.895-2-2-2h-8s1.316-2.017 1-5c-.28-2.656-1.125-4-3-4S8.375 3.344 8 5s-2 6-4 6H2v10.5h2c2 0 2.5 2.5 6 2.5h7c1.105 0 2-.895 2-2s-.895-2-2-2h1c1.105 0 2-.895 2-2s-.895-2-2-2h1c1.105 0 2-.895 2-2 0-.415-.126-.8-.343-1.12C21.437 12.608 22 11.873 22 11z"/></g></svg>;
				break;
			case 'dribbble':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 20.75c-2.03 0-3.906-.625-5.312-1.875 1.406-2.656 4.062-4.688 6.875-5.625 1.406 3.125 1.875 5.312 2.03 6.72-1.093.468-2.343.78-3.593.78zm5-1.562c-.625-3.28-1.72-5.938-1.875-6.25 2.03-.312 3.75-.312 5.625 0-.312 2.5-1.72 4.843-3.75 6.25zM3.25 11.375c3.28.312 5.47 0 9.062-1.094.312.626.625 1.25.78 1.72-2.81.938-5.937 2.97-7.655 5.78C4.03 16.22 3.25 14.19 3.25 12v-.625zM19.188 7c.938 1.25 1.406 2.812 1.562 4.53-1.406-.31-4.062-.468-6.094 0-.312-.624-.47-1.093-.938-1.718 1.876-.937 3.907-1.562 5.47-2.812zM8.562 3.875c1.25 1.72 2.188 3.28 3.125 5.156-1.406.47-5.312 1.25-8.125.94.626-2.814 2.5-5 5-6.095zM12 3.25c2.5 0 4.688 1.094 6.25 2.656-1.406 1.25-3.906 2.03-5.156 2.5-1.094-1.875-1.72-2.97-2.97-5 .626 0 1.25-.156 1.876-.156zM12 2C6.53 2 2 6.53 2 12s4.53 10 10 10 10-4.53 10-10S17.47 2 12 2z"/></g></svg>;
				break;
			case 'dropbox':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M7.883 2.697L2 6.54l4.07 3.257L12 6.134"/><path d="M2 13.054l5.883 3.843L12 13.46 6.07 9.796M12 13.46l4.116 3.437L22 13.054l-4.07-3.257M22 6.54l-5.884-3.843L12 6.134l5.93 3.663"/><path d="M12.01 14.2l-4.127 3.426-1.767-1.153v1.29l5.895 3.54 5.9-3.54v-1.29l-1.77 1.153"/></g></svg>;
				break;
			case 'eventbrite':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M18.04 3.93L5.96 3C4.324 3 3 4.325 3 5.96V18.04C3 19.675 4.325 21 5.96 21l12.082-.93C19.7 19.982 21 18.743 21 17.11V6.89c0-1.634-1.26-2.863-2.96-2.96zm-1.107 4.24c-.082.215-.192.432-.378.55-.188.123-.49.133-.8.133-1.52 0-3.06-.048-4.606-.048-.153.708-.305 1.416-.452 2.128.932-.004 1.873.005 2.81.005.726 0 1.462-.07 1.586.525.04.19 0 .426-.052.615-.105.38-.258.676-.625.783-.185.055-.408.06-.646.06-1.144 0-2.344.016-3.492.02-.17.77-.328 1.552-.49 2.332 1.57-.005 3.068-.04 4.634-.058.627-.007 1.085.194 1.01.85-.032.262-.1.497-.212.725-.102.207-.248.375-.488.45-.237.076-.54.065-.862.08-.304.013-.614.007-.924.015-.31.01-.62.022-.92.022-1.252 0-2.428.08-3.682.073-.603-.004-1.014-.25-1.124-.757-.06-.273-.018-.58.036-.84.54-2.593 1.083-5.177 1.63-7.764.055-.266.113-.512.224-.715.17-.304.424-.52.79-.62.368-.1.883-.047 1.344-.047.305 0 .612.008.914.016.925.026 1.817.03 2.747.053.304.007.615.016.915.016.62 0 1.17.073 1.245.614.04.288-.05.567-.132.783z" fill-rule="evenodd" clip-rule="evenodd"/></g></svg>;
				break;
			case 'facebook':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.013c0 .55.445.994.993.994h8.62v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.59 3.494-3.59.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"/></g></svg>;
				break;
			case 'feed':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M2 8.667V12c5.515 0 10 4.485 10 10h3.333c0-7.363-5.97-13.333-13.333-13.333zM2 2v3.333c9.19 0 16.667 7.477 16.667 16.667H22C22 10.955 13.045 2 2 2zm2.5 15C3.118 17 2 18.12 2 19.5S3.118 22 4.5 22 7 20.88 7 19.5 5.882 17 4.5 17z"/></g></svg>;
				break;
			case 'flickr':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M6.5 7c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm11 0c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"/></g></svg>;
				break;
			case 'foursquare':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M17.573 2H6.905S5 3.107 5 3.805v16.948c0 .785.422 1.077.66 1.172.238.097.892.177 1.285-.275 0 0 5.035-5.843 5.122-5.93.132-.132.132-.132.262-.132h3.26c1.367 0 1.587-.977 1.73-1.552.08-.318.693-3.428 1.226-6.122l.675-3.368C19.56 2.893 19.14 2 17.574 2zm-1.078 5.22c-.053.252-.372.518-.665.518h-4.157c-.467 0-.802.318-.802.787v.508c0 .467.338.798.806.798h3.528s.655.363.583.716c-.072.353-.407 2.102-.448 2.295-.04.194-.263.524-.656.524h-2.88c-.523 0-.683.068-1.033.503-.35.437-3.504 4.223-3.504 4.223-.032.035-.063.027-.063-.015V4.852c0-.298.26-.648.648-.648h8.563c.315 0 .61.297.528.683l-.445 2.333z"/></g></svg>;
				break;
			case 'github':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>;
				break;
			case 'google-plus-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M8 11h6.61c.06.35.11.7.11 1.16 0 4-2.68 6.84-6.72 6.84-3.87 0-7-3.13-7-7s3.13-7 7-7c1.89 0 3.47.69 4.69 1.83l-1.9 1.83c-.52-.5-1.43-1.08-2.79-1.08-2.39 0-4.34 1.98-4.34 4.42S5.61 16.42 8 16.42c2.77 0 3.81-1.99 3.97-3.02H8V11zm15 0h-2V9h-2v2h-2v2h2v2h2v-2h2"/></g></svg>;
				break;
			case 'google-plus':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.92 14.05c-2.235 0-4.05-1.814-4.05-4.05s1.815-4.05 4.05-4.05c1.095 0 2.01.4 2.71 1.057l-1.15 1.118c-.292-.275-.802-.6-1.56-.6-1.34 0-2.433 1.115-2.433 2.48s1.094 2.48 2.434 2.48c1.552 0 2.123-1.074 2.228-1.71h-2.232v-1.51h3.79c.058.255.102.494.102.83 0 2.312-1.55 3.956-3.887 3.956zm8.92-3.3h-1.25V14h-1.5v-1.25H15v-1.5h1.25V10h1.5v1.25H19v1.5z"/></g></svg>;
				break;
			case 'instagram':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M5.31 3h13.38C19.96 3 21 4.04 21 5.31v13.38c0 1.27-1.04 2.31-2.31 2.31H5.31C4.04 21 3 19.96 3 18.69V5.31C3 4.04 4.04 3 5.31 3zm10.802 2c-.446 0-.81.365-.81.81v1.94c0 .446.365.81.81.81h2.035c.446 0 .81-.365.81-.81V5.81c0-.446-.365-.81-.81-.81h-2.035zm2.854 5.612h-1.584c.15.49.23 1.008.23 1.544 0 2.994-2.504 5.42-5.594 5.42-3.09 0-5.595-2.426-5.595-5.42 0-.537.08-1.055.23-1.544H5v7.604c0 .394.322.716.716.716H18.25c.394 0 .716-.322.716-.716v-7.604zm-6.95-2.154c-1.996 0-3.614 1.568-3.614 3.503 0 1.936 1.62 3.504 3.615 3.504 1.997 0 3.615-1.568 3.615-3.503 0-1.934-1.618-3.502-3.615-3.502z" fill-rule="evenodd" clip-rule="evenodd"/></g></svg>;
				break;
			case 'linkedin':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574c-.857 0-1.55-.694-1.55-1.548 0-.855.692-1.548 1.55-1.548.854 0 1.547.694 1.547 1.548 0 .855-.692 1.548-1.546 1.548zm11.335 9.764h-2.67V14.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.6 1.086-1.6 2.206v4.248h-2.668v-8.59h2.56v1.174h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.203 1.78 3.203 4.092v4.71z"/></g></svg>;
				break;
			case 'mail':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 4H4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z"/></g></svg>;
				break;
			case 'path-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M17.19 16.38c-.676.338-1.536.6-2.317.6-.86 0-1.77-.027-2.577-.417v1.77c0 2.29-.99 3.672-3.385 3.672-.676 0-1.98-.21-2.37-.833V18.36c.365.415.938.702 1.51.702.626 0 .99-.364.99-.99V8.334h3.255v5.728c.546.182 1.094.26 1.666.26 2.084 0 3.83-1.406 3.83-3.594 0-3.41-2.944-4.738-5.964-4.738-2.813 0-5.73 1.64-5.73 4.764 0 .964.21 1.745.887 2.448l-2.37 2.03C3.313 13.803 3 12.657 3 10.756c0-4.947 4.114-7.76 8.722-7.76 4.66 0 9.322 2.396 9.322 7.604 0 2.603-1.535 4.686-3.853 5.78z"/></g></svg>;
				break;
			case 'path':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-4.08 11.19c-.383.192-.868.34-1.31.34-.484 0-1-.016-1.455-.236v1c0 1.294-.56 2.073-1.912 2.073-.383 0-1.118-.118-1.338-.47v-1.59c.206.236.53.398.853.398.353 0 .56-.205.56-.56v-5.5h1.838v3.236c.31.104.618.148.94.148 1.178 0 2.163-.794 2.163-2.03 0-1.927-1.663-2.676-3.37-2.676-1.588 0-3.235.926-3.235 2.69 0 .545.118.986.5 1.384l-1.34 1.147c-.734-.81-.91-1.456-.91-2.53 0-2.794 2.323-4.382 4.926-4.382 2.634 0 5.266 1.354 5.266 4.295 0 1.472-.868 2.65-2.176 3.266z"/></g></svg>;
				break;
			case 'pinterest-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12.29 2C6.616 2 3.605 5.648 3.605 9.622c0 1.846 1.025 4.146 2.666 4.878.25.11.38.063.44-.17.043-.174.266-1.028.364-1.427.032-.128.017-.237-.09-.362-.54-.63-.976-1.79-.976-2.872 0-2.777 2.194-5.464 5.933-5.464 3.23 0 5.49 2.108 5.49 5.122 0 3.407-1.794 5.768-4.13 5.768-1.29 0-2.257-1.02-1.948-2.277.372-1.495 1.09-3.112 1.09-4.19 0-.968-.543-1.776-1.664-1.776-1.318 0-2.378 1.31-2.378 3.06 0 1.115.394 1.87.394 1.87s-1.302 5.278-1.54 6.26c-.405 1.666.053 4.368.094 4.604.02.126.167.17.25.063.13-.165 1.7-2.42 2.142-4.05.158-.59.817-2.996.817-2.996.43.785 1.68 1.447 3.012 1.447 3.963 0 6.822-3.494 6.822-7.833C20.394 5.112 16.85 2 12.29 2"/></g></svg>;
				break;
			case 'pinterest':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.087-.79-.166-2.005.035-2.87.183-.78 1.174-4.97 1.174-4.97s-.3-.6-.3-1.484c0-1.39.807-2.43 1.81-2.43.853 0 1.265.642 1.265 1.41 0 .858-.547 2.14-.83 3.33-.235.995.5 1.806 1.482 1.806 1.777 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.067-4.177-4.067-2.846 0-4.516 2.134-4.516 4.34 0 .86.33 1.78.744 2.282.082.098.094.185.07.286-.078.316-.247.995-.28 1.134-.044.183-.145.222-.334.134-1.25-.58-2.03-2.407-2.03-3.874 0-3.154 2.292-6.05 6.607-6.05 3.47 0 6.166 2.47 6.166 5.774 0 3.446-2.173 6.22-5.19 6.22-1.012 0-1.965-.526-2.29-1.148l-.624 2.377c-.226.87-.835 1.957-1.243 2.622.935.29 1.93.445 2.96.445 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></g></svg>;
				break;
			case 'pocket':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M21.927 4.194C21.667 3.48 20.982 3 20.222 3H3.84c-.748 0-1.43.47-1.695 1.17-.08.208-.12.424-.12.644v6.035l.07 1.2c.29 2.73 1.707 5.114 3.9 6.777l.118.09.025.017c1.175.86 2.49 1.44 3.91 1.727.655.133 1.325.2 1.99.2.616 0 1.233-.056 1.84-.17.073-.013.145-.027.22-.043.02-.004.04-.012.063-.023 1.36-.297 2.622-.864 3.754-1.69l.025-.02c.04-.028.08-.057.118-.088 2.192-1.664 3.61-4.05 3.898-6.778l.07-1.2V4.814c0-.21-.026-.416-.1-.62zm-4.235 6.287l-4.704 4.513c-.266.254-.608.382-.95.382-.34 0-.683-.128-.948-.382L6.385 10.48c-.547-.523-.565-1.39-.04-1.938.523-.547 1.39-.565 1.938-.04l3.756 3.6 3.754-3.6c.547-.524 1.415-.506 1.94.04.522.547.504 1.414-.042 1.94z"/></g></svg>;
				break;
			case 'polldaddy':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.487 2 2 6.487 2 12c0 5.514 4.487 10 10 10 5.514 0 10-4.486 10-10 0-5.513-4.486-10-10-10zm.99 1.68c2.362.084 4.658 1.25 6.198 3.136.283.334.54.693.774 1.067-1.427-1.79-3.627-2.94-6.094-2.94-2.357 0-4.467 1.047-5.896 2.703-.006.003-.01.01-.016.014l-.152.16-.03.03C6.76 8.948 6.14 10.41 6.14 12.017c0 3.387 2.756 6.143 6.143 6.143.57 0 1.123-.082 1.65-.228-1.85.84-4.132.747-5.927-.324-1.84-1.09-3.17-3.11-3.433-5.313-.294-2.205.483-4.548 2.117-6.158 1.604-1.637 3.944-2.574 6.3-2.457zm3.374 8.52c-.05-2.025-1.587-3.89-3.544-4.175-1.927-.343-3.917.857-4.45 2.66-.272.884-.19 1.848.2 2.654.39.8 1.066 1.45 1.893 1.758 1.664.654 3.63-.27 4.173-1.863.593-1.58-.396-3.423-1.94-3.776-1.52-.408-3.16.756-3.204 2.242-.05.716.253 1.42.753 1.88.5.475 1.23.666 1.87.528.647-.127 1.2-.557 1.47-1.134.27-.576.22-1.256-.087-1.767-.297-.514-.86-.864-1.43-.882-.57-.03-1.12.246-1.436.68-.326.435-.38 1.025-.18 1.488.004.01.01.02.016.03.193.634.774 1.1 1.467 1.117-.33.04-.674-.02-.97-.183-.466-.244-.81-.747-.893-1.29-.083-.544.09-1.137.5-1.54.398-.412.988-.65 1.58-.605.592.04 1.158.35 1.516.86.364.495.51 1.155.383 1.772-.115.62-.528 1.174-1.092 1.514-.557.34-1.264.455-1.914.287-.65-.16-1.226-.606-1.584-1.206-.36-.594-.49-1.337-.34-2.03.142-.7.572-1.32 1.175-1.753 1.193-.883 3.056-.75 4.106.41 1.107 1.1 1.328 3.028.407 4.372-.877 1.375-2.74 2.085-4.374 1.593-1.64-.45-2.913-2.08-3.03-3.853-.07-.884.13-1.797.582-2.577C8.43 8.636 9.14 7.98 9.957 7.55c1.64-.88 3.816-.742 5.35.425 1.25.924 2.082 2.42 2.235 4.01v.03c0 2.9-2.358 5.26-5.26 5.26-.686 0-1.343-.135-1.946-.377.866.207 1.777.176 2.613-.08 1.005-.303 1.893-.926 2.513-1.75.618-.828.95-1.86.9-2.87zM12 21.112c-5.024 0-9.11-4.087-9.11-9.113 0-4.79 3.712-8.723 8.41-9.08-.133.015-.266.035-.397.06-2.644.452-5.017 2.105-6.32 4.408-1.31 2.3-1.39 5.19-.3 7.527 1.056 2.34 3.253 4.156 5.776 4.553 2.496.44 5.132-.483 6.786-2.3 1.72-1.798 2.27-4.53 1.486-6.797-.583-1.81-1.976-3.33-3.7-4.045 3.417.594 6.174 3.22 6.174 6.78 0 1.005-.24 2.02-.657 2.967-1.5 2.984-4.587 5.04-8.15 5.04z"/></g></svg>;
				break;
			case 'print':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M9 16h6v2H9v-2zm13 1h-3v3c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2v-3H2V9c0-1.105.895-2 2-2h1V5c0-1.105.895-2 2-2h10c1.105 0 2 .895 2 2v2h1c1.105 0 2 .895 2 2v8zM7 7h10V5H7v2zm10 7H7v6h10v-6zm3-3.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z"/></g></svg>;
				break;
			case 'reddit':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M22 11.816c0-1.256-1.02-2.277-2.277-2.277-.593 0-1.122.24-1.526.613-1.48-.965-3.455-1.594-5.647-1.69l1.17-3.702 3.18.75c.01 1.027.847 1.86 1.877 1.86 1.035 0 1.877-.84 1.877-1.877 0-1.035-.842-1.877-1.877-1.877-.77 0-1.43.466-1.72 1.13L13.55 3.92c-.204-.047-.4.067-.46.26l-1.35 4.27c-2.317.037-4.412.67-5.97 1.67-.402-.355-.917-.58-1.493-.58C3.02 9.54 2 10.56 2 11.815c0 .814.433 1.523 1.078 1.925-.037.222-.06.445-.06.673 0 3.292 4.01 5.97 8.94 5.97s8.94-2.678 8.94-5.97c0-.214-.02-.424-.052-.632.687-.39 1.154-1.12 1.154-1.964zm-3.224-7.422c.606 0 1.1.493 1.1 1.1s-.493 1.1-1.1 1.1-1.1-.494-1.1-1.1.493-1.1 1.1-1.1zm-16 7.422c0-.827.673-1.5 1.5-1.5.313 0 .598.103.838.27-.85.675-1.477 1.478-1.812 2.36-.32-.274-.525-.676-.525-1.13zm9.183 7.79c-4.502 0-8.165-2.33-8.165-5.193S7.457 9.22 11.96 9.22s8.163 2.33 8.163 5.193-3.663 5.193-8.164 5.193zM20.635 13c-.326-.89-.948-1.7-1.797-2.383.247-.186.55-.3.882-.3.827 0 1.5.672 1.5 1.5 0 .482-.23.91-.586 1.184zm-11.64 1.704c-.76 0-1.397-.616-1.397-1.376 0-.76.636-1.397 1.396-1.397.76 0 1.376.638 1.376 1.398 0 .76-.616 1.376-1.376 1.376zm7.405-1.376c0 .76-.615 1.376-1.375 1.376s-1.4-.616-1.4-1.376c0-.76.64-1.397 1.4-1.397.76 0 1.376.638 1.376 1.398zm-1.17 3.38c.15.152.15.398 0 .55-.675.674-1.728 1.002-3.22 1.002l-.01-.002-.012.002c-1.492 0-2.544-.328-3.218-1.002-.152-.152-.152-.398 0-.55.152-.152.4-.15.55 0 .52.52 1.394.775 2.67.775l.01.002.01-.002c1.276 0 2.15-.253 2.67-.775.15-.152.398-.152.55 0z"/></g></svg>;
				break;
			case 'share':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M7 12c0-2.757 2.243-5 5-5 1.523 0 2.945.685 3.902 1.88.344.43.973.5 1.405.154.432-.345.5-.975.155-1.405C16.125 5.957 14.134 5 12 5c-3.52 0-6.442 2.612-6.93 6H2v2h5v-1zm10-1v1c0 2.757-2.243 5-5 5-1.523 0-2.946-.685-3.902-1.88-.346-.43-.976-.502-1.406-.154-.43.345-.5.975-.156 1.405C7.876 18.043 9.866 19 12 19c3.52 0 6.442-2.612 6.93-6H22v-2h-5zm-7 1c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2z"/></g></svg>;
				break;
			case 'skype':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M21.43 14.15c.146-.656.222-1.343.222-2.046 0-5.27-4.272-9.542-9.542-9.542-.558 0-1.103.052-1.63.14-.854-.538-1.862-.848-2.946-.848C4.48 1.854 2 4.332 2 7.388c0 1.02.278 1.98.76 2.796-.126.622-.196 1.26-.196 1.92 0 5.27 4.273 9.54 9.542 9.54.594 0 1.178-.056 1.75-.156.778.416 1.665.658 2.612.658 3.054 0 5.533-2.48 5.533-5.534.004-.888-.203-1.717-.57-2.46zm-4.424 2.514c-.446.628-1.09 1.12-1.944 1.47-.833.35-1.838.524-2.98.524-1.367 0-2.517-.24-3.415-.715-.64-.348-1.174-.818-1.57-1.394-.408-.585-.61-1.17-.61-1.724 0-.35.132-.654.4-.902.26-.25.596-.367.993-.367.33 0 .61.096.844.29.223.185.406.462.558.817.172.388.355.715.55.97.185.247.456.458.8.616.342.164.812.245 1.39.245.785 0 1.433-.168 1.92-.497.475-.323.704-.713.704-1.193 0-.375-.12-.673-.37-.907-.257-.242-.602-.43-1.02-.558-.435-.133-1.018-.28-1.746-.43-.99-.212-1.834-.462-2.5-.748-.683-.293-1.237-.697-1.634-1.197-.413-.514-.614-1.155-.614-1.916 0-.723.215-1.37.645-1.93.426-.557 1.053-.987 1.852-1.286.79-.293 1.728-.442 2.8-.442.85 0 1.597.1 2.23.29.624.197 1.156.464 1.573.787.42.33.732.677.928 1.044.184.367.287.73.287 1.084 0 .344-.132.654-.393.92-.262.272-.59.412-.985.412-.356 0-.63-.088-.816-.254-.178-.158-.364-.406-.574-.76-.24-.45-.525-.813-.855-1.058-.32-.242-.857-.37-1.592-.37-.684 0-1.242.14-1.654.407-.4.26-.592.558-.592.912 0 .215.064.4.19.558.135.164.323.31.57.43.255.126.508.23.77.3.264.076.71.183 1.318.324.773.163 1.484.347 2.112.55.633.203 1.184.457 1.628.748.458.3.82.678 1.078 1.135.26.458.387 1.02.387 1.68 0 .788-.223 1.502-.664 2.13z"/></g></svg>;
				break;
			case 'spotify':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.43 2 2 6.43 2 12s4.43 10 10 10 10-4.43 10-10S17.57 2 12 2zm4 14.714c-.143 0-.286 0-.43-.143-1.428-.856-3.285-1.285-5.142-1.285-1 0-2.143.143-3.143.286-.143 0-.43.144-.43.144-.428 0-.57-.286-.57-.57 0-.43.286-.572.57-.715 1.144-.287 2.287-.572 3.572-.572 2.143 0 4.143.57 5.857 1.57.286.144.43.287.43.715 0 .286-.285.57-.714.57zm1.143-2.57c-.286 0-.286-.144-.57-.144-1.572-1-3.858-1.57-6.287-1.57-1.286 0-2.43.14-3.286.427-.143 0-.286.143-.43.143-.428-.143-.856-.57-.856-1s.143-.714.57-.857c1.144-.286 2.287-.57 4-.57 2.572 0 5.144.713 7.144 1.856.286.142.43.428.43.856s-.287.857-.715.857zM18.43 11c-.144 0-.287 0-.572-.143C16 9.714 13.286 9.143 10.57 9.143c-1.428 0-2.713.143-4 .43-.14-.002-.284.14-.57.14-.57 0-1-.428-1-1s.286-.856.714-1c1.43-.428 3-.57 4.714-.57 3 0 6 .57 8.286 2 .286.143.572.428.572.857 0 .57-.43 1-.857 1z"/></g></svg>;
				break;
			case 'squarespace':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20.87 9.27c-1.507-1.506-3.95-1.506-5.458 0l-6.14 6.142c-.378.377-.378.988 0 1.364.376.377.987.377 1.364 0l6.14-6.14c.754-.754 1.976-.754 2.73 0 .753.754.753 1.975 0 2.73l-6.023 6.02c.754.755 1.975.755 2.73 0l4.657-4.657c1.507-1.508 1.507-3.952 0-5.46zm-2.047 2.048c-.377-.377-.988-.377-1.365 0l-6.14 6.14c-.754.754-1.976.754-2.73 0-.376-.377-.987-.377-1.363 0-.377.377-.377.988 0 1.364 1.507 1.507 3.95 1.507 5.458 0l6.14-6.14c.376-.376.376-.988 0-1.364zm-2.047-6.14c-1.507-1.51-3.95-1.51-5.458 0l-6.14 6.14c-.377.376-.377.987 0 1.363.377.378.988.378 1.364 0l6.14-6.14c.755-.753 1.976-.753 2.73 0 .377.378.988.378 1.365 0 .376-.375.376-.986 0-1.363zM14.73 7.223c-.378-.377-.99-.377-1.365 0l-6.14 6.14c-.754.755-1.976.755-2.73 0-.753-.752-.753-1.974 0-2.728l6.023-6.022c-.754-.754-1.976-.754-2.73 0L3.13 9.27c-1.507 1.51-1.507 3.952 0 5.46 1.507 1.506 3.95 1.506 5.458 0l6.14-6.142c.378-.376.378-.987 0-1.364z"/></g></svg>;
				break;
			case 'stumbleupon':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M13.058 9.618l1.367.625 2.037-.597V8.258C16.39 5.895 14.422 4 12 4 9.585 4 7.625 5.882 7.538 8.232v6.343c0 .573-.473 1.038-1.058 1.038s-1.058-.467-1.058-1.038v-2.69H2v2.723C2 17.035 4.002 19 6.472 19c2.447 0 4.432-1.93 4.465-4.328l.005-6.263c0-.576.475-1.04 1.058-1.04s1.058.464 1.058 1.04v1.208zm5.52 2.267v2.813c0 .577-.473 1.042-1.058 1.042-.587 0-1.06-.465-1.06-1.042V11.94l-2.035.597-1.367-.625v2.738c.022 2.405 2.015 4.35 4.47 4.35C19.998 19 22 17.035 22 14.608v-2.723h-3.422z"/></g></svg>;
				break;
			case 'telegram':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.08 14.757s-.25.625-.936.325l-2.54-1.95-1.63 1.487s-.128.095-.267.035c0 0-.12-.01-.27-.486-.15-.476-.91-2.973-.91-2.973L6 12.35s-.387-.138-.425-.44c-.037-.3.437-.46.437-.46l10.03-3.935s.824-.362.824.238l-1.786 9.004z"/></g></svg>;
				break;
			case 'tumblr-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M16.75 17.396c-.358.17-1.042.32-1.552.332-1.54.04-1.837-1.08-1.85-1.896V9.847h3.86v-2.91h-3.846V2.04h-2.817c-.046 0-.127.04-.138.143-.165 1.5-.867 4.13-3.783 5.18V9.85H8.57v6.282c0 2.15 1.586 5.206 5.774 5.135 1.413-.024 2.982-.616 3.33-1.126l-.925-2.744z"/></g></svg>;
				break;
			case 'tumblr':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-5.57 14.265c-2.445.042-3.37-1.742-3.37-2.998V10.6H8.922V9.15c1.703-.615 2.113-2.15 2.21-3.026.006-.06.053-.084.08-.084h1.645V8.9h2.246v1.7H12.85v3.495c.008.476.182 1.13 1.08 1.107.3-.008.698-.094.907-.194l.54 1.6c-.205.297-1.12.642-1.946.657z"/></g></svg>;
				break;
			case 'twitch':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M16.5 8.09h-1.637V13H16.5V8.09zm-4.5 0h-1.637V13H12V8.09zM4.228 3.177L3 6.45v13.093h4.5V22h2.455l2.454-2.456h3.68L21 14.636V3.178H4.228zm15.136 10.638L16.5 16.68H12l-2.453 2.454V16.68H5.863V4.814h13.5v9.002z"/></g></svg>;
				break;
			case 'twitter-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.67.812-2.606.996C18.325 4.498 17.258 4 16.078 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.41-.17-6.433-1.804-8.457-4.287-.353.607-.556 1.312-.556 2.064 0 1.424.724 2.68 1.825 3.415-.673-.022-1.305-.207-1.86-.514v.052c0 1.988 1.415 3.647 3.293 4.023-.344.095-.707.145-1.08.145-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.817 3.833 2.85-1.404 1.1-3.174 1.757-5.096 1.757-.332 0-.66-.02-.98-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53.802-.578 1.497-1.3 2.047-2.124z"/></g></svg>;
				break;
			case 'twitter':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2.5 6.7v.3c0 3-2.3 6.6-6.6 6.6-1.3 0-2.5-.4-3.5-1h.5c1.1 0 2.1-.4 2.9-1-1 0-1.9-.7-2.2-1.6H8c.2 0 .4 0 .6-.1-1.1-.2-1.8-1.1-1.8-2.3.3.2.7.3 1 .3-.6-.4-1-1.1-1-1.9 0-.4.1-.8.3-1.2 1.1 1.4 2.8 2.3 4.7 2.4 0-.2-.1-.3-.1-.5 0-1.3 1-2.3 2.3-2.3.7 0 1.3.3 1.7.7.5-.1 1-.3 1.5-.6-.2.5-.5 1-1 1.3.5-.1.9-.2 1.3-.4-.2.6-.6 1-1 1.3z"/></g></svg>;
				break;
			case 'vimeo':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19.438 3.004c-2.908-.093-4.882 1.533-5.914 4.883.532-.225 1.05-.342 1.555-.342 1.067 0 1.536.595 1.412 1.783-.063.718-.534 1.767-1.413 3.142-.883 1.375-1.543 2.064-1.982 2.064-.565 0-1.084-1.06-1.555-3.18-.16-.622-.44-2.212-.85-4.77-.377-2.367-1.382-3.476-3.017-3.32-.69.064-1.73.686-3.11 1.87C3.56 6.036 2.538 6.94 1.5 7.842l.99 1.262c.94-.654 1.49-.98 1.648-.98.72 0 1.395 1.12 2.023 3.358l1.696 6.158C8.7 19.88 9.736 21 10.96 21c1.976 0 4.392-1.84 7.247-5.516 2.76-3.522 4.19-6.293 4.282-8.32.123-2.71-.894-4.097-3.052-4.16z"/></g></svg>;
				break;
			case 'whatsapp':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12.144 2c-5.384 0-9.75 4.365-9.75 9.75 0 2.672 1.416 5.06 1.416 5.06L2.107 22l5.34-1.708s1.984 1.204 4.697 1.204c5.384 0 9.75-4.365 9.75-9.75 0-5.38-4.366-9.746-9.75-9.746zm0 17.938c-2.506 0-4.512-1.355-4.512-1.355l-3.08 1.005 1-2.98s-1.596-2.21-1.596-4.858c0-4.523 3.666-8.19 8.19-8.19s8.188 3.667 8.188 8.19c0 4.52-3.667 8.188-8.19 8.188zm4.792-6.128s-1.597-.774-1.925-.924c-.328-.15-.494.095-.494.095l-.64.813c-.156.2-.245.378-.65.244-.407-.132-1.222-.57-1.887-1.17-.667-.595-1.176-1.384-1.32-1.624-.145-.24.022-.39.022-.39s.42-.485.624-.745c.2-.26.076-.55.028-.668-.05-.117-.696-1.64-.79-1.854-.095-.215-.3-.25-.3-.25h-.767c-.137 0-.4.167-.4.167-.794.507-.928 1.686-.95 1.94-.024.255-.046.795.37 1.705s1.434 2.144 2.69 3.316 3.185 1.676 3.768 1.84c.582.162 1.814-.127 2.392-.752.58-.625.445-1.274.434-1.49-.01-.218-.204-.252-.204-.252z"/></g></svg>;
				break;
			case 'wordpress':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.01 12c0-1.304.28-2.54.778-3.66l4.29 11.752c-3-1.458-5.07-4.534-5.07-8.092zM12 20.99c-.882 0-1.734-.128-2.54-.365l2.698-7.84 2.763 7.572c.02.044.042.085.065.124-.934.33-1.938.51-2.985.51zm1.24-13.206c.54-.028 1.028-.085 1.028-.085.484-.058.427-.77-.057-.742 0 0-1.455.114-2.395.114-.883 0-2.368-.114-2.368-.114-.485-.028-.542.712-.058.74 0 0 .458.058.942.086l1.4 3.838-1.967 5.9L6.49 7.785c.543-.028 1.03-.085 1.03-.085.484-.058.427-.77-.057-.742 0 0-1.456.114-2.396.114-.17 0-.368-.004-.58-.01C6.098 4.62 8.86 3.008 12 3.008c2.34 0 4.472.894 6.07 2.36-.038-.002-.076-.007-.115-.007-.883 0-1.51.77-1.51 1.596 0 .74.428 1.367.883 2.108.342.6.74 1.368.74 2.48 0 .77-.295 1.662-.683 2.906l-.897 2.996-3.25-9.666zm6.65-.098c.7 1.28 1.1 2.75 1.1 4.313 0 3.316-1.798 6.212-4.47 7.77l2.746-7.94c.513-1.283.684-2.308.684-3.22 0-.33-.022-.637-.06-.924z"/></g></svg>;
				break;
			case 'xanga':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M9 9h6v6H9V9zM3 9h6V3H3v6zm12 0h6V3h-6v6zm0 12h6v-6h-6v6zM3 21h6v-6H3v6z"/></g></svg>;
				break;
			case 'youtube':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>;
				break;
		}
		return ( svg );
	}
} );
