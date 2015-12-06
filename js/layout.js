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
	                    html:'<div id="logo"><a href="index.php" border="0">&nbsp;</a></div><div id="logo_tims"><img src="images/teleconsult_tims.png" /></div>'
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
                xtype: 'tabpanel',
                region: 'east',
                collapsed: true,
                title: 'Documents',               
                animCollapse: true,
                collapsible: true,
                split: true,
                width: 225, // give east and west regions a width
                minSize: 200,
                maxSize: 500,
                margins: '0 5 0 0',
                activeTab: 0,
                tabPosition: 'bottom',
                items: [{
                    //html: '<p>All Documents</p>',
                    title: 'Documents',
                    autoScroll: true,
                    layout: 'accordion',
                    items: [{
                    	title: 'General Documents',
                    	id : 'legalAndContract',
						//html:'<p>Legal and Contract</p>',
                    	bodyPadding: 0,
                    	iconCls: 'list'
                    },{
	                   	title: 'Documents',
						id : 'auditReportId',
		                //html: "Please select a site",/////////////////////////
						bodyPadding : 0,
		                iconCls: 'list',
						items: [auditReportGrid]
	                 }]                   
                }]
            },{
	                region: 'west',
	                id: 'west-panel', // see Ext.getCmp() below
	                title: 'Information Panel',
	                split: true,
	                width: 300,
	                minWidth: 200,
	                maxWidth: 500,
	                collapsible: false,
	                animCollapse: true,
	                margins: '0 0 0 5',
	                layout: 'accordion',
	                items: [{
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
	                    title: 'Site Survey and ESR',
	                    //html: '<p>Sitac goes here</p>',
			    bodyPadding : 5,
	                    iconCls: 'list',
			    items : [siteSurvey]
	                },{
	                    title: ' Structural Design',
	                    //html: '<p>Asset Management goes here</p>',
			      bodyPadding : 5,
	                    iconCls: 'list',
			      items : [structuralDesign]
	                },{
	                    title: '  M&E and Grounding Design',
	                    //html: '<p>Asset Management goes here</p>',
			      bodyPadding : 5,
	                    iconCls: 'list',
			      items : [meGrounding]
	                },{
	                    title: 'Media',
	                    autoScroll: true,
	                    html: "<div id='media' style='padding:5px;'>Please select a site</div>",	                    
	                    iconCls: 'nav'
	                },{
	                    title: 'Search',
	                    //html: '<p>Search functions goes here.</p>',
	                    iconCls: 'nav',
			    		bodyPadding : 2,
			    		items : [
			    			Ext.create('Ext.toolbar.Toolbar', {
			    				anchor : '100%',
			    				border: 0,
			    				boddyPadding: 5,
			    				items: [
			    					{
										xtype    : 'textfield',
										name     : 'searchField',
										width	 : 250,
										emptyText: 'enter search term'
									}
			    				]
			    			})
			    		]
			    
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
	                
	                	title: 'Table View',
	                	autoScroll: true,
	                	html: '<div id="table_grid"></div>',
						items : [tableGrid]
	                },{
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
			
			load();
			
			
	    });
