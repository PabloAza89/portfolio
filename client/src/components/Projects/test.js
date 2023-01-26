/* * @event Sticky#unstuckfrom */ .trigger('sticky.zf.unstuckfrom:' + topOrBottom); } /** * Sets the $element and $container sizes for plugin. * Calls `_setBreakPoints`. * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`. * @private */ }, { key: '_setSizes', value: function _setSizes(cb) { if (!this.options) return; this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn) || window.matchMedia(this.options.stickyOn).matches; this.useScrollContainer = Foundation.MediaQuery.atLeast(this.options.scrollContainerOn) || window.matchMedia(this.options.scrollContainerOn).matches; if (!this.canStick) { if (cb) { cb(); } } var _this = this, newElemWidth = this.$container[0].getBoundingClientRect().width, comp = window.getComputedStyle(this.$container[0]), pdng = parseInt(comp['padding-right'], 10); if (this.$anchor && this.$anchor.length) { this.anchorHeight = this.$anchor[0].getBoundingClientRect().height; } else { this._parsePoints(); } this.$element.css({ 'max-width': newElemWidth - pdng + 'px' }); var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight; if (this.$element.css("display") == "none") { newContainerHeight = 0; } this.containerHeight = newContainerHeight; this.$container.css({ 'min-height': newContainerHeight }); this.elemHeight = newContainerHeight; //if (this.isStuck) { // this.$element.css({ "left": this.$container.offset().left + parseInt(comp['padding-left'], 10) }); //} this._setBreakPoints(newContainerHeight, function () { if (cb) { cb(); } }); } /** * Sets the upper and lower breakpoints for the element to become sticky/unsticky. * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`. * @param {Function} cb - optional callback function to be called on completion. * @private */ }, { key: '_setBreakPoints', value: function _setBreakPoints(elemHeight, cb) { if (!this.canStick) { if (cb) { cb(); } else { return false; } } var mTop = emCalc(this.options.marginTop), mBtm = emCalc(this.options.marginBottom), topPoint = this.points ? this.points[0] : this.$anchor.offset().top, bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight, winHeight = window.innerHeight; if (this.$anchor) { topPoint = this.$anchor.offset().top || this.points[0], bottomPoint = topPoint + this.anchorHeight || this.points[1] } if (this.options.stickTo === 'top') { topPoint -= mTop; bottomPoint -= elemHeight + mTop; } else if (this.options.stickTo === 'bottom') { topPoint -= winHeight - (elemHeight + mBtm); bottomPoint -= winHeight - mBtm; } else { //this would be the stickTo: both option... tricky } this.topPoint = topPoint; this.bottomPoint = bottomPoint; if (cb) { cb(); } } /** * Destroys the current sticky element. * Resets the element to the top position first. * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container. * @function */ }, { key: 'destroy', value: function destroy() { this._removeSticky(true); this.$element.removeClass(this.options.stickyClass + ' is-anchored is-at-top').css({ height: '', top: '', bottom: '', 'max-width': '' }).off('resizeme.zf.trigger'); if (this.$anchor && this.$anchor.length) { this.$anchor.off('change.zf.sticky'); } var scrollContainer = (this.useScrollContainer && this.options.scrollContainer) ? this.options.scrollContainer : window; $(scrollContainer).off(this.scrollListener); if (this.wasWrapped) { this.$element.unwrap(); } else { this.$container.removeClass(this.options.containerClass).css({ height: '' }); } Foundation.unregisterPlugin(this); } }]); return Sticky; }(); Sticky.defaults = { /** * Customizable container template. Add your own classes for styling and sizing. * @option * @example '&lt;div data-sticky-container class="small-6 columns"&gt;&lt;/div&gt;' */ container: '<div data-sticky-container></div>', /** * Location in the view the element sticks to. * @option * @example 'top' */ stickTo: 'top', /** * If anchored to a single element, the id of that element. * @option * @example 'exampleId' */ anchor: '', /** * If using more than one element as anchor points, the id of the top anchor. * @option * @example 'exampleId:top' */ topAnchor: '', /** * If using more than one element as anchor points, the id of the bottom anchor. * @option * @example 'exampleId:bottom' */ btmAnchor: '', /** * Margin, in `em`'s to apply to the top of the element when it becomes sticky. * @option * @example 1 */ marginTop: 1, /** * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky. * @option * @example 1 */ marginBottom: 1, /** * Breakpoint string that is the minimum screen size an element should become sticky. * @option * @example 'medium' */ stickyOn: 'medium', /** * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`. * @option * @example 'sticky' */ stickyClass: 'sticky', /** * Class applied to sticky container. Foundation defaults to `sticky-container`. * @option * @example 'sticky-container' */ containerClass: 'sticky-container', /** * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll. * @option * @example 50 */ checkEvery: -1 }; /** * Helper function to calculate em values * @param Number {em} - number of em's to calculate into pixels */ function emCalc(em) { return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em; } // Window exports Foundation.plugin(Sticky, 'Sticky');}(jQuery); */