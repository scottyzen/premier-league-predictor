<template>
    <div class="about">
        <section>
				<!-- <select v-model="selectedValue" class="cs-select cs-skin-elastic mt-4 shadow">
					<option value="france" data-class="flag-france">France</option>
					<option value="brazil" data-class="flag-brazil">Brazil</option>
					<option value="argentina" selected data-class="flag-argentina">Argentina</option>
					<option value="south-africa" data-class="flag-safrica">South Africa</option>
				</select> -->

                <select class="cs-select cs-skin-elastic mt-4 shadow text-base max-w-xs" v-model="selectedValue">
                    <option v-for="team in teams" v-bind:value="team.number" :key="team.number">
                        {{ team.name }}
                    </option>
                </select>
        </section>
        <h1 class="bg-purple inline-block text-base px-4 py-2 text-grey-lighter"> {{selectedValue}}</h1>
  </div>
</template>
<script>
/* eslint-disable */
import '@/assets/styles/select.css';

export default {
    data() {
        return{
            selectedValue: '1',
            teams: [
                { name: 'Arsenal', number: 15 },
                { name: 'Bournemouth', number: 11 },
                { name: 'Brighton', number: 6 },
                { name: 'Burnley', number: 18 },
                { name: 'Cardif', number: 12 },
                { name: 'Chelsea', number: 8 },
                { name: 'Crystal Palace', number: 10 },
                { name: 'Everton', number: 4 },
                { name: 'Fulham', number: 9 },
                { name: 'Huddersfield', number: 7 },
                { name: 'Leicester City', number: 2 },
                { name: 'Liverpool', number: 19 },
                { name: 'Manchester City', number: 16 },
                { name: 'Manchester United', number: 1 },
                { name: 'Newcastle United', number: 13 },
                { name: 'Southampton', number: 17 },
                { name: 'Tottenham Hotspurs', number: 14 },
                { name: 'Watford', number: 5 },
                { name: 'West Ham United', number: 20 },
                { name: 'Wolverhampton', number: 3 }
            ]
        }
    },
    methods:{},
    mounted(){

    var that = this;


    function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
        return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
        elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
        elem.classList.remove( c );
    };
    }
    else {
    hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
        }
    };
    removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
    };
    }

    function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
    }

    var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
    } else {
    // browser global
    window.classie = classie;
    }

        function hasParent( e, p ) {
            if (!e) return false;
            var el = e.target||e.srcElement||e||false;
            while (el && el != p) {
                el = el.parentNode||false;
            }
            return (el!==false);
        };
        
        function extend( a, b ) {
            for( var key in b ) { 
                if( b.hasOwnProperty( key ) ) {
                    a[key] = b[key];
                }
            }
            return a;
        }

        function SelectFx( el, options ) {	
            this.el = el;
            this.options = extend( {}, this.options );
            extend( this.options, options );
            this._init();
        }

        SelectFx.prototype.options = {
            // if true all the links will open in a new tab.
            // if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
            newTab : false,
            // when opening the select element, the default placeholder (if any) is shown
            stickyPlaceholder : true,
            // callback when changing the value
            onChange : function( val ) { 
                that.selectedValue = val;
                return false; }
        }

        SelectFx.prototype._init = function() {
            // check if we are using a placeholder for the native select box
            // we assume the placeholder is disabled and selected by default
            var selectedOpt = this.el.querySelector( 'option[selected]' );
            this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

            // get selected option (either the first option with attr selected or just the first option)
            this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );

            // create structure
            this._createSelectEl();

            // all options
            this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );
            
            // total options
            this.selOptsCount = this.selOpts.length;
            
            // current index
            this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;
            
            // placeholder elem
            this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );

            // init events
            this._initEvents();
        }

        SelectFx.prototype._createSelectEl = function() {
            var self = this, options = '', createOptionHTML = function(el) {
                var optclass = '', classes = '', link = '';

                if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
                    classes += 'cs-selected ';
                    this.foundSelected = true;
                }
                // extra classes
                if( el.getAttribute( 'data-class' ) ) {
                    classes += el.getAttribute( 'data-class' );
                }
                // link options
                if( el.getAttribute( 'data-link' ) ) {
                    link = 'data-link=' + el.getAttribute( 'data-link' );
                }

                if( classes !== '' ) {
                    optclass = 'class="' + classes + '" ';
                }

                return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
            };

            [].slice.call( this.el.children ).forEach( function(el) {
                if( el.disabled ) { return; }

                var tag = el.tagName.toLowerCase();

                if( tag === 'option' ) {
                    options += createOptionHTML(el);
                }
                else if( tag === 'optgroup' ) {
                    options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
                    [].slice.call( el.children ).forEach( function(opt) {
                        options += createOptionHTML(opt);
                    } )
                    options += '</ul></li>';
                }
            } );

            var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
            this.selEl = document.createElement( 'div' );
            this.selEl.className = this.el.className;
            this.selEl.tabIndex = this.el.tabIndex;
            this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
            this.el.parentNode.appendChild( this.selEl );
            this.selEl.appendChild( this.el );
        }

        SelectFx.prototype._initEvents = function() {
            var self = this;

            // open/close select
            this.selPlaceholder.addEventListener( 'click', function() {
                self._toggleSelect();
            } );

            // clicking the options
            this.selOpts.forEach( function(opt, idx) {
                opt.addEventListener( 'click', function() {
                    self.current = idx;
                    self._changeOption();
                    // close select elem
                    self._toggleSelect();
                } );
            } );

            // close the select element if the target itÂ´s not the select element or one of its descendants..
            document.addEventListener( 'click', function(ev) {
                var target = ev.target;
                if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
                    self._toggleSelect();
                }
            } );

            // keyboard navigation events
            this.selEl.addEventListener( 'keydown', function( ev ) {
                var keyCode = ev.keyCode || ev.which;

                switch (keyCode) {
                    // up key
                    case 38:
                        ev.preventDefault();
                        self._navigateOpts('prev');
                        break;
                    // down key
                    case 40:
                        ev.preventDefault();
                        self._navigateOpts('next');
                        break;
                    // space key
                    case 32:
                        ev.preventDefault();
                        if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
                            self._changeOption();
                        }
                        self._toggleSelect();
                        break;
                    // enter key
                    case 13:
                        ev.preventDefault();
                        if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
                            self._changeOption();
                            self._toggleSelect();
                        }
                        break;
                    // esc key
                    case 27:
                        ev.preventDefault();
                        if( self._isOpen() ) {
                            self._toggleSelect();
                        }
                        break;
                }
            } );
        }

        SelectFx.prototype._navigateOpts = function(dir) {
            if( !this._isOpen() ) {
                this._toggleSelect();
            }

            var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
            
            if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
                // save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
                this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
                // remove focus class if any..
                this._removeFocus();
                // add class focus - track which option we are navigating
                classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
            }
        }

        SelectFx.prototype._toggleSelect = function() {
            // remove focus class if any..
            this._removeFocus();
            
            if( this._isOpen() ) {
                if( this.current !== -1 ) {
                    // update placeholder text
                    this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
                }
                classie.remove( this.selEl, 'cs-active' );
            }
            else {
                if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
                    // everytime we open we wanna see the default placeholder text
                    this.selPlaceholder.textContent = this.selectedOpt.textContent;
                }
                classie.add( this.selEl, 'cs-active' );
            }
        }

        SelectFx.prototype._changeOption = function() {
            // if pre selected current (if we navigate with the keyboard)...
            if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
                this.current = this.preSelCurrent;
                this.preSelCurrent = -1;
            }

            // current option
            var opt = this.selOpts[ this.current ];

            // update current selected value
            this.selPlaceholder.textContent = opt.textContent;
            
            // change native select elementÂ´s value
            this.el.value = opt.getAttribute( 'data-value' );

            // remove class cs-selected from old selected option and add it to current selected option
            var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
            if( oldOpt ) {
                classie.remove( oldOpt, 'cs-selected' );
            }
            classie.add( opt, 'cs-selected' );

            // if thereÂ´s a link defined
            if( opt.getAttribute( 'data-link' ) ) {
                // open in new tab?
                if( this.options.newTab ) {
                    window.open( opt.getAttribute( 'data-link' ), '_blank' );
                }
                else {
                    window.location = opt.getAttribute( 'data-link' );
                }
            }

            // callback
            this.options.onChange( this.el.value );
        }

        SelectFx.prototype._isOpen = function(opt) {
            return classie.has( this.selEl, 'cs-active' );
        }

        SelectFx.prototype._removeFocus = function(opt) {
            var focusEl = this.selEl.querySelector( 'li.cs-focus' )
            if( focusEl ) {
                classie.remove( focusEl, 'cs-focus' );
            }
        }

        window.SelectFx = SelectFx;



        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );

        }
    }
</script>
