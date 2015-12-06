Ext.require(['*']);

	    Ext.onReady(function() {		
	        Ext.QuickTips.init();
	        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

	        var viewport = Ext.create('Ext.Viewport', {
	            id: 'border-example',
	            layout: 'border',
	            items: [
	            // create instance immediately
	            Ext.create('Ext.Component', {
	                region: 'north',
	                height: 75, // give north and south regions a height
	                autoEl: {
	                    tag: 'div',
	                    html:'<div id="logo"><a href="index.php" border="0"><img src="images/teleconsult_logo.png" /></a></div><div id="logo_tims"><img src="images/TIMS_logo_non-interlaced.png" /></div>'
	                }
	            }), {
	                // lazily created panel (xtype:'panel' is default)
	                region: 'south',
	                contentEl: 'south',
	                split: true,
	                height: 100,
	                minSize: 100,
	                maxSize: 200,
	                collapsible: true,
	                collapsed: true,
	                title: 'PT. Teleconsult Nusantara',
	                margins: '0 0 0 0'
	            }, {
	                region: 'west',
	                id: 'west-panel', // see Ext.getCmp() below
	                title: 'Information Panel',
	                split: true,
	                width: 300,
	                minWidth: 200,
	                maxWidth: 500,
	                collapsible: true,
	                animCollapse: false,
	                margins: '0 0 0 5',
	                layout: 'accordion',
	                items: [{
	                    title: 'Legal and Contract',
	                    html: '<p>Legal and Contract</p>',
			    		bodyPadding : 0,
	                            iconCls: 'list'
			              //items : [gridDocuments]
	                  },{
	                    contentEl: 'west',
	                    title: 'General Information',			    
	                    iconCls: 'nav',
			    autoScroll:true,
			    bodyPadding : 5,
		            fieldDefaults :{
				    labelAlign: 'left',
				    labelWidth: 90,
				    anchor: '100%'
				},
			    items : [generalInformation]			
	                  },{
	                    title: 'General Documents',
	                    html: '<p>Documents goes here</p>',
			    		bodyPadding : 0,
	                    iconCls: 'list',
			            items : [gridDocuments]
	                  },{
	                    title: 'Progress Reporting',
	                    html: '<p>Progress Reporting.</p>',
	                    iconCls: 'image'
	                  }, {
	                    title: 'Map Tools',
	                    //html: '<p>regional Office goes here</p>',
			    bodyPadding : 5,
	                    iconCls: 'list',
			    items : [{
				xtype : 'fieldset',
				flex: 1,
			        title: 'Filter Sites',
		                layout: 'anchor',											
				defaults: {
				    anchor: '100%',				    
				    hideEmptyLabel: false
				    },
				    //items: [regionalOfficeRadio]
				    items: [formFilterMarker]
			    }]
	                },{
	                    title: 'Property Management',
	                    //html: '<p>Sitac goes here</p>',
			    bodyPadding : 5,
	                    iconCls: 'list',
			    items : [sitac]
	                },{
	                    title: 'Asset Management',
	                    html: '<p>Asset Management goes here</p>',
			      bodyPadding : 5,
	                    iconCls: 'list'
			      //items : [sitac]
	                },{
	                    title: 'Media',
	                    autoScroll: true,
	                    html: "<div id='media' style='padding:5px;'>Please select a site</media>",	                    
	                    iconCls: 'nav'
	                },{
	                    title: 'Search',
	                    //html: '<p>Search functions goes here.</p>',
	                    iconCls: 'nav',
			    bodyPadding : 5
			    //items : [cari]
			    
	                }]
	            },
	            // in this instance the TabPanel is not wrapped by another panel
	            // since no title is needed, this Panel is added directly
	            // as a Container
	            Ext.create('Ext.tab.Panel', {
	                region: 'center', // a center region is ALWAYS required for border layout
	                deferredRender: false,
	                activeTab: 0,     // first tab initially active
	                items: [{
	                    contentEl: 'map_canvas',
	                    title: 'Map View',	                    
	                    autoScroll: true
	                }, {
	                    //contentEl: 'center2',
	                    title: 'Administrator',
	                    autoScroll: true,
						bodyStyle:'padding:5px',
						items : [
						
													Ext.create('Ext.toolbar.Toolbar', {
													
													//width   : 500,
													anchor : '100%',
													items: [
														{
															xtype: 'button', // default for Toolbars
															text: 'User Management',
															iconCls : 'user',
															menu : menu
														},
														{
															xtype: 'splitbutton',
															text : 'Split Button'
														},
														// begin using the right-justified button container
														'->', // same as {xtype: 'tbfill'}, // Ext.toolbar.Fill
														{
															xtype    : 'textfield',
															name     : 'field1',
															emptyText: 'enter search term'
														},
														// add a vertical separator bar between toolbar items
														'-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
														'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
														{xtype: 'tbspacer'},// same as ' ' to create Ext.toolbar.Spacer
														'text 2',
														{xtype: 'tbspacer', width: 50}, // add a 50px space
														'text 3'
													]
												})
																						
						]
	                }]
	            })]
	        });
			
			
	        // get a reference to the HTML element with id "hideit" and add a click listener to it
	        Ext.get("hideit").on('click', function(){
	            // get a reference to the Panel that was created with id = 'west-panel'
	            var w = Ext.getCmp('west-panel');
	            // expand or collapse that Panel based on its collapsed property state
	            w.collapsed ? w.expand() : w.collapse();
	        });	
			
			initialize();
	    });
