/ * Auteur: Ian

* /

Array.prototype.move = fonction (old_index, new_index) {
    if (new_index> = this.length) {
        var k = new_index - this.length;
        tandis que ((k--) + 1) {
            this.push (non défini);
        }
    }
    this.splice (new_index, 0, this.splice (old_index, 1) [0]);
    retourner ceci; // à des fins de test
};

enregistreur (s) de fonctions
{
	console.log (s);
}

// capacité de réflexion, tableau de modificateurs de contenu, CONTENU, tableau de ressources, tableau de produits, taille du groupe ...
fonction du (des)
{
	retourner s + "du";
}
faire fonctionner le (s)
{
	retourner s + "le";
}
fonction an (s)
{
	si (s == "wikipedia")
	{
		retourner "Wikipedia";
	}
	var first = s.charAt (0);
	var voyelles = nouveau tableau ("a", "e", "i", "o", "u");
	pour (var i = voyelles.longueur - 1; i> = 0; i -) {
		if (first.toLowerCase () == voyelles [i])
		{
			retourner "an" + s;
		}
	};
	retourner "a" + s;
}

Handlebars.registerHelper ('ittr', fonction (contexte, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "";

if (context && context.length> 0) 
{
    pour (var i = 0, j = context.length; i <j; i ++) 
	{
		this.first = false;
		this.last = false;
		si (i == 0)
		{
			this.first = true;
		}
		si (i == j-1)
		{
			this.last = true;
		}
		
      ret = ret + fn (_. extend ({}, {word: context [i]}, {i: i}, {first: this.first}, {last: this.last}));
    }
} 
autre 
{
    ret = inverse (ceci);

}
  return ret;
});

Handlebars.registerHelper ('commaList', fonction (contexte, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "";

  if (context && context.length> 0) {
    pour (var i = 0, j = context.length; i <j; i ++) {
		this.first = false;
		this.last = false;
		si (i == 0)
		{
			this.first = true;
		}
		si (i == j-1)
		{
			this.last = true;
		}
	
		si (i == j - 1)
		{
			ret = ret + fn (_. extend ({}, {word: context [i]}, {i: i}, {first: this.first}, {last: this.last}));			
		}
		autre
		{
			if (context.length == 2)
			{
				ret = ret + fn (_. extend ({}, {word: context [i]}, {i: i}, {first: this.first}, {last: this.last})) + "ou";
			}			
			autre
			{	
				ret = ret + fn (_. extend ({}, {word: context [i]}, {i: i}, {first: this.first}, {last: this.last})) + ", ou" ;
			}
		}
    }
  } autre {
    ret = inverse (ceci);
  }
  return ret;
});

var Objective = Backbone.Model.extend ({
	par défaut: {
		"thinking_skill": "juge le",
		"contenu": "[cliquez pour modifier]",
		"p_glue": "et créer",
		"r_glue": "en utilisant",
		"ressources": "un manuel",
		"g_glue": "en groupes de",
		"group_size": "trois"
	},
	initialiser: fonction () {
		if (! this.get ('content_modifiers'))
		{
			this.set ({'content_modifiers': new Array ("éthique du")});
		}
		
		if (! this.get ('products'))
		{
			this.set ({'products': new Array (aAn ("essai"))});
		}
	},
	getCM: fonction ()
	{
		if (! this.get ('content_modifiers'))
		{
			return new Array ();
		}
		autre
		{
			renvoyer this.get ('content_modifiers');
		}
	},
	getP: function ()
	{
		if (! this.get ('products'))
		{
			return new Array ();
		}
		autre
		{
			renvoyer this.get ('produits');
		}
	}
	
});

var ObjectiveView = Backbone.View.extend ({
	tagName: "div",
	id: "obj",
	el: "#obj",
	événements : {
		"click # p-obj": "editObj",
		"cliquez sur #closeEdit": "closeEdit",
		"keypress: input": "pressEnter",
		"cliquez sur .p_delete": "deleteP",
		"click .p_right": "movePRight",	
		"click .p_left": "movePLeft",		
		"cliquez sur .cm_delete": "deleteCM",
		"click .cm_right": "moveCMRight",	
		"cliquez sur .cm_left": "moveCMLeft"		
	},
	pressEnter: fonction (e)
	{
		var code = e.keyCode || e.qui;
		si (code == 13)
		{
			this.closeEdit (e);
		}
	},
	movePRight: fonction (e)
	{
		e.preventDefault ();		
		var id = $ (e.currentTarget) .data ("n");
		var a = this.model.getP ();
		a = a.move (id, id + 1);
		this.model.set ({"produits": a});	
		this.editObj ();	
	},
	movePLeft: fonction (e)
	{
		e.preventDefault ();				
		var id = $ (e.currentTarget) .data ("n");
		var a = this.model.getP ();
		a = a.move (id, id-1);
		this.model.set ({"produits": a});	
		this.editObj ();	
	},	
	deleteP: fonction (e)
	{
		e.preventDefault ();				
		var id = $ (e.currentTarget) .data ("n");
		var a = this.model.get ("produits");
		a. épissure (id, 1);
		this.model.set ({"produits": a});
		var that = this;
		$ ("# p-pair-" + id) .hide ("fade", {}, 400, function () {$ (this) .remove (); that.editObj ();});		
	},
	moveCMRight: fonction (e)
	{
		e.preventDefault ();		
		var id = $ (e.currentTarget) .data ("n");
		var a = this.model.getCM ();
		a = a.move (id, id + 1);
		this.model.set ({"content_modifiers": a});	
		this.editObj ();	
	},
	moveCMLeft: fonction (e)
	{
		e.preventDefault ();		
		var id = $ (e.currentTarget) .data ("n");
		var a = this.model.getCM ();
		a = a.move (id, id-1);
		this.model.set ({"content_modifiers": a});	
		this.editObj ();	
	},	
	deleteCM: fonction (e)
	{
		e.preventDefault ();				
		var id = $ (e.currentTarget) .data ("n");
		var a = this.model.get ("content_modifiers");
		// et si l'identifiant a changé!
		a. épissure (id, 1);
		this.model.set ({"content_modifiers": a});
		var that = this;
		$ ("# cm-pair-" + id) .hide ("fade", {}, 400, function () {$ (this) .remove (); that.editObj ();});
	},
	closeEdit: function ()
	{
		var c_a = this.model.get ("content_modifiers");
		pour (var i = 0; i <c_a.length; i ++)
		{
			if ($ ("# cm" + i) .val ()! = non défini)
			{
				c_a [i] = $ ("# cm" + i) .val ();
			}
		};
		
		
		var p_a = this.model.get ("produits");
		pour (var i = 0; i <p_a.length; i ++)
		{
			p_a [i] = $ ("# p" + i) .val ();
		};

		this.model.set ({
			'thinking_skill': $ ("# ts_edit"). val (),
			'content': $ ("# c_edit"). val (),
			'resources': $ ("# r_edit"). val (),			
			'thinking_skill': $ ("# ts_edit"). val (),
			'group_size': $ ("# group_size_edit"). val (),
			'p_glue': $ ("# p_glue_edit"). val (),
			«produits»: p_a,
			'content_modifiers': c_a
			});
		
				
		renvoie this.render ();
	},
	editP: fonction ()
	{
		var source = $ ("# edit-p-template"). html ();
		var template = Handlebars.compile (source);	
		var html = template (this.model.toJSON ());
		$ (this.el) .children ("# text"). html (html);
		$ ("# p_tab"). click ();		
		retourner ceci;				
	},		
	editCM: fonction ()
	{
		var source = $ ("# edit-cm-template"). html ();
		var template = Handlebars.compile (source);	
		var html = template (this.model.toJSON ());
		$ (this.el) .children ("# text"). html (html);
		$ ("# cm_tab"). click ();
		retourner ceci;				
	},	
	editObj: function ()
	{
		var source = $ ("# edit-obj-template"). html ();
		var template = Handlebars.compile (source);	
		var html = template (this.model.toJSON ());
		$ (this.el) .children ("# text"). html (html);
		$ ('input'). each (function () {
			var size = $ (this) .val (). length;
			si (taille> 15)
			{
				taille = 15;
			}		
			taille = taille * 13; // largeur moyenne d'un caractère
			$ (this) .css ('largeur', taille);
		});		
		retourner ceci;				
	},
	setModel: fonction (m)
	{
		this.model = m;
		_.bindAll (ceci, "renderTS");		
		_.bindAll (ceci, "renderCM");
		_.bindAll (ceci, "renderP");
		_.bindAll (ceci, "renderG");
		_.bindAll (ceci, "renderR");				
		this.model.bind ('change: thinking_skill', this.renderTS);				
		this.model.bind ('change: resources', this.renderR);				
		this.model.bind ('change: group_size', this.renderG);								
		this.model.bind ('change_cm', this.renderCM);		
		this.model.bind ('change_p', this.renderP);				
	},
	renderTS: function ()
	{
		this.render ();	
		$ ("# ts_span"). effect ("highlight", {}, 1000);		
	},
	renderCM: function ()
	{
		this.render ();	
		$ ("# cm_span"). effect ("highlight", {}, 1000);		
	},	
	renderP: function ()
	{
		this.render ();	
		$ ("# p_span"). effect ("highlight", {}, 1000);		
	},	
	renderG: function ()
	{
		this.render ();	
		$ ("# g_span"). effect ("highlight", {}, 1000);		
	},
	renderR: function ()
	{
		this.render ();	
		$ ("# r_span"). effect ("highlight", {}, 1000);		
	},		
	render: function ()
	{
		var source = $ ("# obj-template"). html ();
		var template = Handlebars.compile (source);	
		var html = template (this.model.toJSON ());
		$ (this.el) .children ("# text"). html (html);		
		retourner ceci;		
	}
});



