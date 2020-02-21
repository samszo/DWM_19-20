/ * ================================================ ===
 * bootstrap-transition.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ================================================= ==
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= ========= * /


! fonction ($) {

  $ (fonction () {

    "utiliser strict"; // jshint; _;


    / * SUPPORT DE TRANSITION CSS (http://www.modernizr.com/)
     * ================================================= ====== * /

    $ .support.transition = (fonction () {

      var transitionEnd = (fonction () {

        var el = document.createElement ('bootstrap')
          , transEndEventNames = {
               'WebkitTransition': 'webkitTransitionEnd'
            , 'MozTransition': 'transitionend'
            , 'OTransition': 'oTransitionEnd'
            , 'msTransition': 'MSTransitionEnd'
            , 'transition': 'transitionend'
            }
          , Nom

        pour (nom dans transEndEventNames) {
          if (el.style [nom]! == non défini) {
            return transEndEventNames [nom]
          }
        }

      } ())

      retour transitionEnd && {
        end: transitionEnd
      }

    }) ()

  })

} (window.jQuery); / * ========================================== =================
 * bootstrap-alert.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ================================================= =========
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= ========= * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * DÉFINITION DE LA CLASSE D'ALERTE
  * ====================== * /

  var rejeter = "[data-rejeter =" alerte "] '
    , Alert = fonction (el) {
        $ (el) .on ('cliquer', ignorer, this.close)
      }

  Alert.prototype.close = fonction (e) {
    var $ this = $ (ce)
      , selector = $ this.attr ('data-target')
      , $ parent

    si (! sélecteur) {
      sélecteur = $ this.attr ('href')
      selector = selector && selector.replace (/.* (? = # [^ \ s] * $) /, '') // strip pour ie7
    }

    $ parent = $ (sélecteur)

    e && e.preventDefault ()

    $ parent.length || ($ parent = $ this.hasClass ('alert')? $ this: $ this.parent ())

    $ parent.trigger (e = $ .Event ('close'))

    if (e.isDefaultPrevented ()) return

    $ parent.removeClass ('in')

    fonction removeElement () {
      $ parent
        .trigger ('fermé')
        .retirer()
    }

    $ .support.transition && $ parent.hasClass ('fade')?
      $ parent.on ($. support.transition.end, removeElement):
      removeElement ()
  }


 / * DÉFINITION DU PLUGIN D'ALERTE
  * ======================= * /

  $ .fn.alert = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('alerte')
      if (! data) $ this.data ('alert', (data = new Alert (this)))
      if (typeof option == 'string') data [option] .call ($ this)
    })
  }

  $ .fn.alert.Constructor = Alert


 / * ALERT DATA-API
  * ============== * /

  $ (fonction () {
    $ ('body'). on ('click.alert.data-api', ignorer, Alert.prototype.close)
  })

} (window.jQuery); / * ========================================== ===================
 * bootstrap-button.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ================================================= ===========
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= =========== * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * BOUTON DEFINITION DE LA CLASSE PUBLIQUE
  * ============================== * /

  var Button = fonction (élément, options) {
    this. $ element = $ (element)
    this.options = $ .extend ({}, $ .fn.button.defaults, options)
  }

  Button.prototype.setState = fonction (état) {
    var d = 'désactivé'
      , $ el = this. $ element
      , data = $ el.data ()
      , val = $ el.is ('entrée')? 'val': 'html'

    état = état + 'Texte'
    data.resetText || $ el.data ('resetText', $ el [val] ())

    $ el [val] (données [état] || this.options [état])

    // boucle push to event pour autoriser l'envoi de formulaires
    setTimeout (fonction () {
      state == 'loadingText'?
        $ el.addClass (d) .attr (d, d):
        $ el.removeClass (d) .removeAttr (d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $ parent = this. $ element.parent ('[data-toggle = "buttons-radio"]')

    $ parent && $ parent
      .find ('. active')
      .removeClass ('actif')

    this. $ element.toggleClass ('actif')
  }


 / * DÉFINITION DU PLUGIN DE BOUTON
  * ======================== * /

  $ .fn.button = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('bouton')
        , options = typeof option == 'objet' && option
      if (! data) $ this.data ('button', (data = new Button (this, options))))
      if (option == 'toggle') data.toggle ()
      sinon si (option) data.setState (option)
    })
  }

  $ .fn.button.defaults = {
    loadingText: 'chargement ...'
  }

  $ .fn.button.Constructor = Button


 / * BUTTON DATA-API
  * =============== * /

  $ (fonction () {
    $ ('body'). on ('click.button.data-api', '[data-toggle ^ = button]', function (e) {
      var $ btn = $ (e.target)
      if (! $ btn.hasClass ('btn')) $ btn = $ btn.closest ('. btn')
      $ btn.button ('bascule')
    })
  })

} (window.jQuery); / * ========================================== =================
 * bootstrap-carousel.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ================================================= =========
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= ========= * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * DÉFINITION DE LA CLASSE CARROUSEL
  * ========================= * /

  var Carousel = fonction (élément, options) {
    this. $ element = $ (element)
    this.options = options
    this.options.slide && this.slide (this.options.slide)
    this.options.pause == 'hover' && this. $ element
      .on ('mouseenter', $ .proxy (this.pause, this))
      .on ('mouseleave', $ .proxy (this.cycle, this))
  }

  Carousel.prototype = {

    cycle: fonction (e) {
      si (! e) this.paused = false
      this.options.interval
        &&! this.paused
        && (this.interval = setInterval ($. proxy (this.next, this), this.options.interval))
      retourner ceci
    }

  , à: fonction (pos) {
      var $ active = this. $ element.find ('. active')
        , children = $ active.parent (). children ()
        , activePos = children.index ($ active)
        , c'est = ça

      if (pos> (children.length - 1) || pos <0) return

      if (this.sliding) {
        retourner ceci. $ element.one ('slid', function () {
          that.to (pos)
        })
      }

      if (activePos == pos) {
        renvoie this.pause (). cycle ()
      }

      return this.slide (pos> activePos? 'next': 'prev', $ (children [pos]))
    }

  , pause: fonction (e) {
      si (! e) this.paused = true
      clearInterval (this.interval)
      this.interval = null
      retourner ceci
    }

  , suivant: function () {
      if (this.sliding) return
      retourner this.slide ('suivant')
    }

  , prev: fonction () {
      if (this.sliding) return
      retourner this.slide ('prev')
    }

  , slide: fonction (type, suivant) {
      var $ active = this. $ element.find ('. active')
        , $ suivant = suivant || $ active [type] ()
        , isCycling = this.interval
        , direction = type == 'suivant'? 'gauche droite'
        , fallback = type == 'suivant'? 'premier Dernier'
        , c'est = ça
        , e = $ .Event ('diapo')

      this.sliding = true

      isCycling && this.pause ()

      $ next = $ next.length? $ next: this. $ element.find ('. item') [repli] ()

      if ($ next.hasClass ('active')) return

      if ($ .support.transition && this. $ element.hasClass ('slide')) {
        this. $ element.trigger (e)
        if (e.isDefaultPrevented ()) return
        $ next.addClass (type)
        $ next [0] .offsetWidth // force la refusion
        $ active.addClass (direction)
        $ next.addClass (direction)
        this. $ element.one ($. support.transition.end, function () {
          $ next.removeClass ([type, direction] .join ('')). addClass ('active')
          $ active.removeClass (['active', direction] .join (''))
          that.sliding = false
          setTimeout (function () {that. $ element.trigger ('slid')}, 0)
        })
      } autre {
        this. $ element.trigger (e)
        if (e.isDefaultPrevented ()) return
        $ active.removeClass ('active')
        $ next.addClass ('actif')
        this.sliding = false
        this. $ element.trigger ('slid')
      }

      isCycling && this.cycle ()

      retourner ceci
    }

  }


 / * DÉFINITION DU PLUGIN CAROUSEL
  * ========================== * /

  $ .fn.carousel = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('carrousel')
        , options = $ .extend ({}, $ .fn.carousel.defaults, typeof option == 'object' && option)
      if (! data) $ this.data ('carrousel', (data = new Carousel (this, options))))
      if (typeof option == 'number') data.to (option)
      else if (typeof option == 'string' || (option = options.slide)) data [option] ()
      sinon si (options.interval) data.cycle ()
    })
  }

  $ .fn.carousel.defaults = {
    intervalle: 5000
  , pause: «survoler»
  }

  $ .fn.carousel.Constructor = Carrousel


 / * CAROUSEL DATA-API
  * ================= * /

  $ (fonction () {
    $ ('body'). on ('click.carousel.data-api', '[data-slide]', function (e) {
      var $ this = $ (this), href
        , $ target = $ ($ this.attr ('data-target') || (href = $ this.attr ('href')) && href.replace (/.* (? = # [^ \ s] + $) /, '')) // bande pour ie7
        , options =! $ target.data ('modal') && $ .extend ({}, $ target.data (), $ this.data ())
      $ target.carousel (options)
      e.preventDefault ()
    })
  })

} (window.jQuery); / * ========================================== ====================
 * bootstrap-collapse.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * ================================================= ============
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= =========== * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * RÉDUIRE LA DÉFINITION DE LA CLASSE PUBLIQUE
  * ================================ * /

  var Collapse = fonction (élément, options) {
    this. $ element = $ (element)
    this.options = $ .extend ({}, $ .fn.collapse.defaults, options)

    if (this.options.parent) {
      this. $ parent = $ (this.options.parent)
    }

    this.options.toggle && this.toggle ()
  }

  Collapse.prototype = {

    constructeur: Collapse

  , dimension: fonction () {
      var hasWidth = this. $ element.hasClass ('width')
      retourner hasWidth? 'largeur hauteur'
    }

  , show: function () {
      dimension var
        , faire défiler
        , actifs
        , hasData

      if (this.transitioning) return

      dimension = this.dimension ()
      scroll = $ .camelCase (['scroll', dimension] .join ('-'))
      actifs = this. $ parent && this. $ parent.find ('> .accordion-group> .in')

      if (actifs && actifs.length) {
        hasData = actives.data ('réduire')
        if (hasData && hasData.transitioning) return
        actives.collapse ('masquer')
        hasData || actives.data ('collapse', null)
      }

      this. $ element [dimension] (0)
      this.transition ('addClass', $ .Event ('show'), 'montré')
      this. $ element [dimension] (this. $ element [0] [scroll])
    }

  , hide: function () {
      dimension var
      if (this.transitioning) return
      dimension = this.dimension ()
      this.reset (this. $ element [dimension] ())
      this.transition ('removeClass', $ .Event ('hide'), 'hidden')
      this. $ element [dimension] (0)
    }

  , reset: fonction (taille) {
      var dimension = this.dimension ()

      this. $ element
        .removeClass ('réduire')
        [dimension] (taille || 'auto')
        [0] .offsetWidth

      this. $ element [size! == null? 'addClass': 'removeClass'] ('collapse')

      retourner ceci
    }

  , transition: fonction (méthode, startEvent, completeEvent) {
      var that = this
        , complete = fonction () {
            if (startEvent.type == 'show') that.reset ()
            that.transitioning = 0
            que. $ element.trigger (completeEvent)
          }

      this. $ element.trigger (startEvent)

      if (startEvent.isDefaultPrevented ()) return

      this.transitioning = 1

      this. $ element [method] ('in')

      $ .support.transition && this. $ element.hasClass ('collapse')?
        this. $ element.one ($. support.transition.end, complete):
        Achevée()
    }

  , bascule: fonction () {
      this [this. $ element.hasClass ('in')? 'cacher': 'afficher'] ()
    }

  }


 / * DÉFINITION DU PLUGIN PLIABLE
  * ============================== * /

  $ .fn.collapse = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('collapse')
        , options = typeof option == 'objet' && option
      if (! data) $ this.data ('collapse', (data = new Collapse (this, options))))
      if (typeof option == 'string') data [option] ()
    })
  }

  $ .fn.collapse.defaults = {
    bascule: vrai
  }

  $ .fn.collapse.Constructor = Réduire


 / * API DE DONNÉES COLLAPSIBLE
  * ==================== * /

  $ (fonction () {
    $ ('body'). on ('click.collapse.data-api', '[data-toggle = collapse]', function (e) {
      var $ this = $ (this), href
        , target = $ this.attr ('data-target')
          || e.preventDefault ()
          || (href = $ this.attr ('href')) && href.replace (/.* (? = # [^ \ s] + $) /, '') // strip pour ie7
        , option = $ (target) .data ('collapse')? 'toggle': $ this.data ()
      $ (cible) .collapse (option)
    })
  })

} (window.jQuery); / * ========================================== ===================
 * bootstrap-dropdown.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ================================================= ===========
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= =========== * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * DÉFINITION DE LA CLASSE DÉROULANTE
  * ========================= * /

  var toggle = '[data-toggle = "dropdown"]' '
    , Dropdown = fonction (élément) {
        var $ el = $ (element) .on ('click.dropdown.data-api', this.toggle)
        $ ('html'). on ('click.dropdown.data-api', function () {
          $ el.parent (). removeClass ('ouvert')
        })
      }

  Dropdown.prototype = {

    constructeur: Dropdown

  , bascule: fonction (e) {
      var $ this = $ (ce)
        , $ parent
        , sélecteur
        , c'est actif

      if ($ this.is ('. disabled,: disabled')) return

      selector = $ this.attr ('data-target')

      si (! sélecteur) {
        sélecteur = $ this.attr ('href')
        selector = selector && selector.replace (/.* (? = # [^ \ s] * $) /, '') // strip pour ie7
      }

      $ parent = $ (sélecteur)
      $ parent.length || ($ parent = $ this.parent ())

      isActive = $ parent.hasClass ('ouvert')

      clearMenus ()

      if (! isActive) $ parent.toggleClass ('open')

      retour faux
    }

  }

  fonction clearMenus () {
    $ (bascule) .parent (). removeClass ('ouvert')
  }


  / * DÉFINITION DU PLUGIN DE DÉROULEMENT
   * ========================== * /

  $ .fn.dropdown = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('liste déroulante')
      if (! data) $ this.data ('dropdown', (data = new Dropdown (this)))
      if (typeof option == 'string') data [option] .call ($ this)
    })
  }

  $ .fn.dropdown.Constructor = Dropdown


  / * APPLIQUER AUX ÉLÉMENTS DE DÉROULEMENT STANDARD
   * =================================== * /

  $ (fonction () {
    $ ('html'). on ('click.dropdown.data-api', clearMenus)
    $ ('corps')
      .on ('click.dropdown', '.dropdown form', fonction (e) {e.stopPropagation ()})
      .on ('click.dropdown.data-api', bascule, Dropdown.prototype.toggle)
  })

} (window.jQuery); / * ========================================== ================
 * bootstrap-modal.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * ================================================= ========
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= ======== * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * DÉFINITION DE LA CLASSE MODALE
  * ====================== * /

  var Modal = fonction (contenu, options) {
    this.options = options
    this. $ element = $ (contenu)
      .delegate ('[data-disable = "modal"]', 'click.dismiss.modal', $ .proxy (this.hide, this))
  }

  Modal.prototype = {

      constructeur: Modal

    , bascule: fonction () {
        retourner ceci [! this.isShown? 'show': 'hide'] ()
      }

    , show: function () {
        var that = this
          , e = $ .Event ('afficher')

        this. $ element.trigger (e)

        if (this.isShown || e.isDefaultPrevented ()) return

        $ ('body'). addClass ('modal-open')

        this.isShown = true

        escape.call (ce)
        backdrop.call (this, function () {
          var transition = $ .support.transition && that. $ element.hasClass ('fade')

          if (! that. $ element.parent (). length) {
            $ element.appendTo (document.body) // ne déplace pas la position dom des modaux
          }

          cet élément. $
            .spectacle()

          if (transition) {
            que. $ element [0] .offsetWidth // force la refusion
          }

          que. $ element.addClass ('in')

          transition ?
            that. $ element.one ($. support.transition.end, function () {that. $ element.trigger ('montré')}):
            ça. $ element.trigger ('montré')

        })
      }

    , hide: fonction (e) {
        e && e.preventDefault ()

        var that = this

        e = $ .Event ('masquer')

        this. $ element.trigger (e)

        if (! this.isShown || e.isDefaultPrevented ()) return

        this.isShown = false

        $ ('body'). removeClass ('modal-open')

        escape.call (ce)

        this. $ element.removeClass ('in')

        $ .support.transition && this. $ element.hasClass ('fade')?
          hideWithTransition.call (this):
          hideModal.call (ce)
      }

  }


 / * MÉTHODES PRIVÉES MODALES
  * ===================== * /

  function hideWithTransition () {
    var that = this
      , timeout = setTimeout (fonction () {
          que. $ element.off ($. support.transition.end)
          hideModal.call (que)
        }, 500)

    this. $ element.one ($. support.transition.end, function () {
      clearTimeout (timeout)
      hideModal.call (que)
    })
  }

  function hideModal (that) {
    this. $ element
      .cacher()
      .trigger ('caché')

    backdrop.call (this)
  }

  fond de fonction (rappel) {
    var that = this
      , animate = this. $ element.hasClass ('fade')? 'fondu': ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $ .support.transition && animate

      $ backdrop = $ ('<div class = "modal-backdrop' + animate + '" />')
        .appendTo (document.body)

      if (this.options.backdrop! = 'statique') {
        this. $ backdrop.click ($. proxy (this.hide, this))
      }

      if (doAnimate) this. $ backdrop [0] .offsetWidth // force la refusion

      this. $ backdrop.addClass ('in')

      doAnimate?
        this. $ backdrop.one ($. support.transition.end, callback):
        rappeler()

    } else if (! this.isShown && this. $ backdrop) {
      this. $ backdrop.removeClass ('in')

      $ .support.transition && this. $ element.hasClass ('fade')?
        this. $ backdrop.one ($. support.transition.end, $ .proxy (removeBackdrop, this)):
        removeBackdrop.call (ce)

    } else if (rappel) {
      rappeler()
    }
  }

  fonction removeBackdrop () {
    this. $ backdrop.remove ()
    this. $ backdrop = null
  }

  fonction escape () {
    var that = this
    if (this.isShown && this.options.keyboard) {
      $ (document) .on ('keyup.dismiss.modal', fonction (e) {
        e.which == 27 && that.hide ()
      })
    } sinon si (! this.isShown) {
      $ (document) .off ('keyup.dismiss.modal')
    }
  }


 / * DÉFINITION DU PLUGIN MODAL
  * ======================= * /

  $ .fn.modal = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('modal')
        , options = $ .extend ({}, $ .fn.modal.defaults, $ this.data (), typeof option == 'objet' && option)
      if (! data) $ this.data ('modal', (data = new Modal (this, options))))
      if (typeof option == 'string') data [option] ()
      sinon si (options.show) data.show ()
    })
  }

  $ .fn.modal.defaults = {
      toile de fond: vrai
    , clavier: vrai
    , montrer: vrai
  }

  $ .fn.modal.Constructor = Modal


 / * MODAL DATA-API
  * ============== * /

  $ (fonction () {
    $ ('body'). on ('click.modal.data-api', '[data-toggle = "modal"]', function (e) {
      var $ this = $ (this), href
        , $ target = $ ($ this.attr ('data-target') || (href = $ this.attr ('href')) && href.replace (/.* (? = # [^ \ s] + $) /, '')) // bande pour ie7
        , option = $ target.data ('modal')? 'bascule': $ .extend ({}, $ target.data (), $ this.data ())

      e.preventDefault ()
      $ target.modal (option)
    })
  })

} (window.jQuery); / * ========================================== ==================
 * bootstrap-tooltip.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspiré du jQuery.tipsy original de Jason Frame
 * ================================================= ==========
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= ========= * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== * /

  var Tooltip = fonction (élément, options) {
    this.init ('info-bulle', élément, options)
  }

  Tooltip.prototype = {

    constructeur: Tooltip

  , init: fonction (type, élément, options) {
      var eventIn
        , eventOut

      this.type = type
      this. $ element = $ (element)
      this.options = this.getOptions (options)
      this.enabled = true

      if (this.options.trigger! = 'manual') {
        eventIn = this.options.trigger == 'survoler'? 'mouseenter': 'focus'
        eventOut = this.options.trigger == 'survoler'? 'mouseleave': 'flou'
        this. $ element.on (eventIn, this.options.selector, $ .proxy (this.enter, this))
        this. $ element.on (eventOut, this.options.selector, $ .proxy (this.leave, this))
      }

      this.options.selector?
        (this._options = $ .extend ({}, this.options, {trigger: 'manual', selector: ''})):
        this.fixTitle ()
    }

  , getOptions: fonction (options) {
      options = $ .extend ({}, $ .fn [this.type] .defaults, options, this. $ element.data ())

      if (options.delay && typeof options.delay == 'nombre') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      options de retour
    }

  , entrez: fonction (e) {
      var self = $ (e.currentTarget) [this.type] (this._options) .data (this.type)

      if (! self.options.delay ||! self.options.delay.show) retourne self.show ()

      clearTimeout (this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout (function () {
        if (self.hoverState == 'in') self.show ()
      }, self.options.delay.show)
    }

  , quitter: fonction (e) {
      var self = $ (e.currentTarget) [this.type] (this._options) .data (this.type)

      if (this.timeout) clearTimeout (this.timeout)
      if (! self.options.delay ||! self.options.delay.hide) retourne self.hide ()

      self.hoverState = 'out'
      this.timeout = setTimeout (function () {
        if (self.hoverState == 'out') self.hide ()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $ tip
        , à l'intérieur
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent () && this.enabled) {
        $ tip = this.tip ()
        this.setContent ()

        if (this.options.animation) {
          $ tip.addClass ('fade')
        }

        placement = typede this.options.placement == 'fonction'?
          this.options.placement.call (this, $ tip [0], this. $ element [0]):
          this.options.placement

        inside = /in/.test(placement)

        $ tip
          .retirer()
          .css ({haut: 0, gauche: 0, affichage: 'block'})
          .appendTo (à l'intérieur de? this. $ element: document.body)

        pos = this.getPosition (à l'intérieur)

        actualWidth = $ tip [0] .offsetWidth
        actualHeight = $ tip [0] .offsetHeight

        switch (inside? placement.split ('') [1]: placement) {
          cas 'bas':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            Pause
          cas 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            Pause
          cas «gauche»:
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, gauche: pos.left - actualWidth}
            Pause
          cas «à droite»:
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            Pause
        }

        $ tip
          .css (tp)
          .addClass (placement)
          .addClass ('in')
      }
    }

  , isHTML: fonction (texte) {
      // logique de détection de chaîne html adaptée de jQuery
      retour type de texte! = 'chaîne'
        || (text.charAt (0) === "<"
          && text.charAt (text.length - 1) === ">"
          && text.length> = 3
        ) || /^(?:[^<<**<−\\\\\++&−^^^**)/.exec(text)
    }

  , setContent: function () {
      var $ tip = this.tip ()
        , title = this.getTitle ()

      $ tip.find ('. tooltip-inner') [this.isHTML (title)? 'html': 'text'] (titre)
      $ tip.removeClass ('fondu en haut en bas à gauche à droite')
    }

  , hide: function () {
      var that = this
        , $ tip = this.tip ()

      $ tip.removeClass ('in')

      fonction removeWithAnimation () {
        var timeout = setTimeout (fonction () {
          $ tip.off ($. support.transition.end) .remove ()
        }, 500)

        $ tip.one ($. support.transition.end, function () {
          clearTimeout (timeout)
          $ tip.remove ()
        })
      }

      $ .support.transition && this. $ tip.hasClass ('fade')?
        removeWithAnimation ():
        $ tip.remove ()
    }

  , fixTitle: function () {
      var $ e = cet élément. $
      if ($ e.attr ('title') || typeof ($ e.attr ('data-original-title'))! = 'string') {
        $ e.attr ('data-original-title', $ e.attr ('title') || '') .removeAttr ('title')
      }
    }

  , hasContent: function () {
      renvoyer this.getTitle ()
    }

  , getPosition: fonction (à l'intérieur) {
      return $ .extend ({}, (inside? {top: 0, left: 0}: this. $ element.offset ()), {
        width: this. $ element [0] .offsetWidth
      , hauteur: this. $ element [0] .offsetHeight
      })
    }

  , getTitle: function () {
      titre var
        , $ e = cet élément. $
        , o = this.options

      title = $ e.attr ('data-original-title')
        || (type de o.title == 'fonction'? o.title.call ($ e [0]): o.title)

      titre de retour
    }

  , tip: function () {
      retourner ceci. $ tip = ceci. $ tip || $ (this.options.template)
    }

  , valider: fonction () {
      if (! this. $ element [0] .parentNode) {
        this.hide ()
        this. $ element = null
        this.options = null
      }
    }

  , activer: function () {
      this.enabled = true
    }

  , désactiver: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled =! this.enabled
    }

  , bascule: fonction () {
      this [this.tip (). hasClass ('in')? 'cacher': 'afficher'] ()
    }

  }


 / * DÉFINITION DU PLUGIN TOOLTIP
  * ========================= * /

  $ .fn.tooltip = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('info-bulle')
        , options = typeof option == 'objet' && option
      if (! data) $ this.data ('tooltip', (data = new Tooltip (this, options))))
      if (typeof option == 'string') data [option] ()
    })
  }

  $ .fn.tooltip.Constructor = Info-bulle

  $ .fn.tooltip.defaults = {
    animation: vrai
  , placement: 'top'
  , sélecteur: false
  , modèle: '<div class = "tooltip"> <div class = "tooltip-arrow"> </div> <div class = "tooltip-inner"> </div> </div>'
  , trigger: 'hover'
  , Titre: ''
  , retard: 0
  }

} (window.jQuery);
/ * ================================================ ===========
 * bootstrap-popover.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ================================================= ==========
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= ========== * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * DÉFINITION DE LA CLASSE PUBLIQUE POPOVER
  * =============================== * /

  var Popover = fonction (élément, options) {
    this.init ('popover', élément, options)
  }


  / * REMARQUE: POPOVER PROLONGE BOOTSTRAP-TOOLTIP.js
     ========================================== * /

  Popover.prototype = $ .extend ({}, $ .fn.tooltip.Constructor.prototype, {

    constructeur: Popover

  , setContent: function () {
      var $ tip = this.tip ()
        , title = this.getTitle ()
        , content = this.getContent ()

      $ tip.find ('. popover-title') [this.isHTML (title)? 'html': 'text'] (titre)
      $ tip.find ('. popover-content> *') [this.isHTML (content)? 'html': 'text'] (contenu)

      $ tip.removeClass ('fondu en haut en bas à gauche à droite dans')
    }

  , hasContent: function () {
      renvoyer this.getTitle () || this.getContent ()
    }

  , getContent: function () {
      contenu var
        , $ e = cet élément. $
        , o = this.options

      content = $ e.attr ('data-content')
        || (type de o.content == 'fonction'? o.content.call ($ e [0]): o.content)

      retourner du contenu
    }

  , tip: function () {
      if (! this. $ tip) {
        this. $ tip = $ (this.options.template)
      }
      retourner ceci. $ tip
    }

  })


 / * DÉFINITION DU PLUGIN POPOVER
  * ======================= * /

  $ .fn.popover = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('popover')
        , options = typeof option == 'objet' && option
      if (! data) $ this.data ('popover', (data = new Popover (this, options))))
      if (typeof option == 'string') data [option] ()
    })
  }

  $ .fn.popover.Constructor = Popover

  $ .fn.popover.defaults = $ .extend ({}, $ .fn.tooltip.defaults, {
    placement: «à droite»
  , contenu: ''
  , modèle: '<div class = "popover"> <div class = "arrow"> </div> <div class = "popover-inner"> <h3 class = "popover-title"> </h3> <div class = "popover-content"> <p> </p> </div> </div> </div> '
  })

} (window.jQuery); / * ========================================== ====================
 * bootstrap-scrollspy.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * ================================================= ============
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= ============= * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


  / * DÉFINITION DE LA CLASSE SCROLLSPY
   * ========================== * /

  fonction ScrollSpy (élément, options) {
    var process = $ .proxy (this.process, this)
      , $ element = $ (element) .is ('body')? $ (fenêtre): $ (élément)
      , href
    this.options = $ .extend ({}, $ .fn.scrollspy.defaults, options)
    this. $ scrollElement = $ element.on ('scroll.scroll.data-api', processus)
    this.selector = (this.options.target
      || ((href = $ (element) .attr ('href')) && href.replace (/.* (? = # [^ \ s] + $) /, '')) // strip pour ie7
      || '') + '.nav li> a'
    this. $ body = $ ('body')
    this.refresh ()
    ce processus()
  }

  ScrollSpy.prototype = {

      constructeur: ScrollSpy

    , actualiser: fonction () {
        var self = this
          , $ cibles

        this.offsets = $ ([])
        this.targets = $ ([])

        $ target = this. $ body
          .find (this.selector)
          .map (fonction () {
            var $ el = $ (ce)
              , href = $ el.data ('cible') || $ el.attr ('href')
              , $ href = /^#\w/.test(href) && $ (href)
            return ($ href
              && longueur réf.
              && [[$ href.position (). top, href]]) || nul
          })
          .sort (fonction (a, b) {retour a [0] - b [0]})
          .each (fonction () {
            self.offsets.push (ce [0])
            self.targets.push (ce [1])
          })
      }

    , processus: fonction () {
        var scrollTop = this. $ scrollElement.scrollTop () + this.options.offset
          , scrollHeight = this. $ scrollElement [0] .scrollHeight || this. $ body [0] .scrollHeight
          , maxScroll = scrollHeight - this. $ scrollElement.height ()
          , offsets = this.offsets
          , target = this.targets
          , activeTarget = this.activeTarget
          , je

        if (scrollTop> = maxScroll) {
          return activeTarget! = (i = target.last () [0])
            && this.activer (i)
        }

        for (i = offsets.length; i--;) {
          activeTarget! = cibles [i]
            && scrollTop> = décalages [i]
            && (! décalages [i + 1] || scrollTop <= décalages [i + 1])
            && this.activate (cibles [i])
        }
      }

    , activer: fonction (cible) {
        var active
          , sélecteur

        this.activeTarget = cible

        $ (this.selector)
          .parent ('. active')
          .removeClass ('actif')

        selector = this.selector
          + '[data-target = "' + target + '"],'
          + this.selector + '[href = "' + target + '"]'

        actif = $ (sélecteur)
          .parent ('li')
          .addClass ('actif')

        if (active.parent ('. menu déroulant')) {
          active = active.closest ('li.dropdown'). addClass ('active')
        }

        active.trigger ('activer')
      }

  }


 / * DÉFINITION DU PLUGIN SCROLLSPY
  * =========================== * /

  $ .fn.scrollspy = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('scrollspy')
        , options = typeof option == 'objet' && option
      if (! data) $ this.data ('scrollspy', (data = new ScrollSpy (this, options))))
      if (typeof option == 'string') data [option] ()
    })
  }

  $ .fn.scrollspy.Constructor = ScrollSpy

  $ .fn.scrollspy.defaults = {
    décalage: 10
  }


 / * SCROLLSPY DATA-API
  * ================== * /

  $ (fonction () {
    $ ('[data-spy = "scroll"]'). each (function () {
      var $ spy = $ (ceci)
      $ spy.scrollspy ($ spy.data ())
    })
  })

} (window.jQuery); / * ========================================== ===============
 * bootstrap-tab.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ================================================= =======
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= ======= * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * DÉFINITION DE LA CLASSE D'ONGLET
  * ==================== * /

  var Tab = fonction (élément) {
    this.element = $ (élément)
  }

  Tab.prototype = {

    constructeur: Tab

  , show: function () {
      var $ this = this.element
        , $ ul = $ this.closest ('ul: not (.dropdown-menu)')
        , selector = $ this.attr ('data-target')
        , précédent
        , $ cible
        , e

      si (! sélecteur) {
        sélecteur = $ this.attr ('href')
        selector = selector && selector.replace (/.* (? = # [^ \ s] * $) /, '') // strip pour ie7
      }

      if ($ this.parent ('li'). hasClass ('active')) return

      previous = $ ul.find ('. active a'). last () [0]

      e = $ .Event ('afficher', {
        relatedTarget: précédent
      })

      $ this.trigger (e)

      if (e.isDefaultPrevented ()) return

      $ target = $ (sélecteur)

      this.activate ($ this.parent ('li'), $ ul)
      this.activate ($ target, $ target.parent (), function () {
        $ this.trigger ({
          type: 'montré'
        , relatedTarget: précédent
        })
      })
    }

  , activate: fonction (élément, conteneur, rappel) {
      var $ active = container.find ('> .active')
        , transition = rappel
            && $ .support.transition
            && $ active.hasClass ('fondu')

      fonction next () {
        $ actif
          .removeClass ('actif')
          .find ('> .downdown-menu> .active')
          .removeClass ('actif')

        element.addClass ('actif')

        if (transition) {
          élément [0] .offsetWidth // refusion pour transition
          element.addClass ('in')
        } autre {
          element.removeClass ('fade')
        }

        if (element.parent ('. menu déroulant')) {
          element.closest ('li.dropdown'). addClass ('active')
        }

        callback && callback ()
      }

      transition ?
        $ active.one ($. support.transition.end, suivant):
        suivant()

      $ active.removeClass ('in')
    }
  }


 / * TAB PLUGIN DEFINITION
  * ===================== * /

  $ .fn.tab = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('tab')
      if (! data) $ this.data ('tab', (data = new Tab (this)))
      if (typeof option == 'string') data [option] ()
    })
  }

  $ .fn.tab.Constructor = Tab


 / * TAB DATA-API
  * ============ * /

  $ (fonction () {
    $ ('body'). on ('click.tab.data-api', '[data-toggle = "tab"], [data-toggle = "pill"]', function (e) {
      e.preventDefault ()
      $ (this) .tab ('show')
    })
  })

} (window.jQuery); / * ========================================== ====================
 * bootstrap-typeahead.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * ================================================= ============
 * Copyright 2012 Twitter, Inc.
 *
 * Sous licence Apache License, Version 2.0 (la "Licence");
 * vous ne pouvez pas utiliser ce fichier sauf en conformité avec la licence.
 * Vous pouvez obtenir une copie de la licence à l'adresse
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Sauf si requis par la loi applicable ou accepté par écrit, le logiciel
 * distribué sous licence est distribué sur une base "en l'état",
 * SANS GARANTIE OU CONDITION D'AUCUNE SORTE, expresse ou implicite.
 * Voir la licence pour la langue spécifique régissant les autorisations et
 * limitations sous la licence.
 * ================================================= =========== * /


! fonction ($) {

  "utiliser strict"; // jshint; _;


 / * DÉFINITION DE LA CLASSE PUBLIQUE TYPEAHEAD
  * ================================= * /

  var Typeahead = fonction (élément, options) {
    this. $ element = $ (element)
    this.options = $ .extend ({}, $ .fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this. $ menu = $ (this.options.menu) .appendTo ('body')
    this.source = this.options.source
    this.shown = false
    this.listen ()
  }

  Typeahead.prototype = {

    constructeur: Typeahead

  , sélectionnez: function () {
      var val = this. $ menu.find ('. active'). attr ('data-value')
      this. $ element
        .val (this.updater (val))
        .changement()
      retourner this.hide ()
    }

  , updater: fonction (élément) {
      retourner l'objet
    }

  , show: function () {
      var pos = $ .extend ({}, this. $ element.offset (), {
        height: this. $ element [0] .offsetHeight
      })

      this. $ menu.css ({
        haut: pos.top + pos.height
      , gauche: pos. gauche
      })

      this. $ menu.show ()
      this.shown = true
      retourner ceci
    }

  , hide: function () {
      this. $ menu.hide ()
      this.shown = false
      retourner ceci
    }

  , recherche: fonction (événement) {
      var that = this
        , articles
        , q

      this.query = this. $ element.val ()

      si (! this.query) {
        retourner this.shown? this.hide (): this
      }

      items = $ .grep (this.source, fonction (item) {
        retourner that.matcher (item)
      })

      items = this.sorter (objets)

      if (! items.length) {
        retourner this.shown? this.hide (): this
      }

      retourner this.render (items.slice (0, this.options.items)). show ()
    }

  , matcher: fonction (élément) {
      return ~ item.toLowerCase (). indexOf (this.query.toLowerCase ())
    }

  , trieur: fonction (éléments) {
      var commence par = []
        , caseSensitive = []
        , caseInsensitive = []
        , article

      while (item = items.shift ()) {
        si (! item.toLowerCase (). indexOf (this.query.toLowerCase ())) commence par.push (item)
        sinon si (~ item.indexOf (this.query)) caseSensitive.push (item)
        else caseInsensitive.push (élément)
      }

      retour commence par.concat (caseSensitive, caseInsensitive)
    }

  , surligneur: fonction (élément) {
      var query = this.query.replace (/[\-\\\\\{}()*+?.,\\\^$ | # \ s] / g, '\\ $ &')
      return item.replace (new RegExp ('(' + query + ')', 'ig'), function ($ 1, match) {
        retourner '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $ (items) .map (fonction (i, item) {
        i = $ (that.options.item) .attr ('data-value', item)
        i.find ('a'). html (that.highlighter (item))
        retourne i [0]
      })

      items.first (). addClass ('actif')
      this. $ menu.html (éléments)
      retourner ceci
    }

  , suivant: fonction (événement) {
      var active = this. $ menu.find ('. active'). removeClass ('active')
        , next = active.next ()

      if (! next.length) {
        next = $ (this. $ menu.find ('li') [0])
      }

      next.addClass ('actif')
    }

  , prev: fonction (événement) {
      var active = this. $ menu.find ('. active'). removeClass ('active')
        , prev = active.prev ()

      if (! prev.length) {
        prev = this. $ menu.find ('li'). last ()
      }

      prev.addClass ('actif')
    }

  , écouter: function () {
      this. $ element
        .on ('blur', $ .proxy (this.blur, this))
        .on ('keypress', $ .proxy (this.keypress, this))
        .on ('keyup', $ .proxy (this.keyup, this))

      if ($ .browser.webkit || $ .browser.msie) {
        this. $ element.on ('keydown', $ .proxy (this.keypress, this))
      }

      ce menu. $
        .on ('click', $ .proxy (this.click, this))
        .on ('mouseenter', 'li', $ .proxy (this.mouseenter, this))
    }

  , keyup: fonction (e) {
      switch (e.keyCode) {
        cas 40: // flèche vers le bas
        cas 38: // flèche vers le haut
          Pause

        cas 9: // tab
        cas 13: // entrer
          si (! this.shown) retourne
          this.select ()
          Pause

        cas 27: // évasion
          si (! this.shown) retourne
          this.hide ()
          Pause

        défaut:
          this.lookup ()
      }

      e.stopPropagation ()
      e.preventDefault ()
  }

  , touche: fonction (e) {
      si (! this.shown) retourne

      switch (e.keyCode) {
        cas 9: // tab
        cas 13: // entrer
        cas 27: // évasion
          e.preventDefault ()
          Pause

        cas 38: // flèche vers le haut
          if (e.type! = 'keydown') break
          e.preventDefault ()
          this.prev ()
          Pause

        cas 40: // flèche vers le bas
          if (e.type! = 'keydown') break
          e.preventDefault ()
          this.next ()
          Pause
      }

      e.stopPropagation ()
    }

  , flou: fonction (e) {
      var that = this
      setTimeout (function () {that.hide ()}, 150)
    }

  , cliquez sur: fonction (e) {
      e.stopPropagation ()
      e.preventDefault ()
      this.select ()
    }

  , mouseenter: fonction (e) {
      this. $ menu.find ('. active'). removeClass ('active')
      $ (e.currentTarget) .addClass ('actif')
    }

  }


  / * DÉFINITION DU PLUGIN TYPEAHEAD
   * =========================== * /

  $ .fn.typeahead = fonction (option) {
    retourner this.each (function () {
      var $ this = $ (ce)
        , data = $ this.data ('typeahead')
        , options = typeof option == 'objet' && option
      if (! data) $ this.data ('typeahead', (data = new Typeahead (this, options))))
      if (typeof option == 'string') data [option] ()
    })
  }

  $ .fn.typeahead.defaults = {
    la source: []
  , articles: 8
  , menu: '<ul class = "typeahead dropdown-menu"> </ul>'
  , élément: «<li> <a href="#"> </a> </li>»
  }

  $ .fn.typeahead.Constructor = Typeahead


 / * API TYPEAHEAD DATA
  * ================== * /

  $ (fonction () {
    $ ('body'). on ('focus.typeahead.data-api', '[data-provide = "typeahead"]', function (e) {
      var $ this = $ (ce)
      if ($ this.data ('typeahead')) return
      e.preventDefault ()
      $ this.typeahead ($ this.data ())
    })
  })

} (window.jQuery);