function onButtonClick(btn){
        Ext.example.msg('Button Click','You clicked the "{0}" button.', btn.text);
    }

    function onItemClick(item){
        Ext.example.msg('Menu Click', 'You clicked the "{0}" menu item.', item.text);
    }

    function onItemCheck(item, checked){
        Ext.example.msg('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
    }

    function onItemToggle(item, pressed){
        Ext.example.msg('Button Toggled', 'Button "{0}" was toggled to {1}.', item.text, pressed);
    }
/*
function myclick(i){
	$.ajax({
		url : "ambil_data.php?siteId="+i,
		beforeSend : function ()
		{$("#side_bar").html('<img src="images/loading.gif" alt="loading..." />');},
		success : function (data) {
		$("#side_bar").html(data);		
		}
	});
}*/

function Legend(controlDiv, map) {
  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map
  controlDiv.style.padding = '5px';

  // Set CSS for the control border
  var controlUI = document.createElement('DIV');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '1px';
  controlUI.title = 'Legend';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control text
  var controlText = document.createElement('DIV');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  
  // Add the text
  controlText.innerHTML = '<div style="padding:5px;"><b>LEGEND</b><br />' +
  	'<img src="images/red.png" align="left" style="padding-top:2px;" />&nbsp;Not Started<br />' +
  	'<img src="images/blue.png" align="left" style="padding-top:2px;" />&nbsp;Structural Design Completed<br />' +
  	'<img src="images/orange.png" align="left" style="padding-top:2px;" />&nbsp;Survey Completed<br />' +
  	'<img src="images/purple.png" align="left" style="padding-top:2px;" />&nbsp;ESR Completed<br />' +
  	'<img src="images/magenta.png" align="left" style="padding-top:2px;" />&nbsp;Grounding Design Completed<br />' +
  	'<img src="images/green.png" align="left" style="padding-top:2px;" />&nbsp;All Completed<br />' +
  	'<img src="images/white.png" align="left" style="padding-top:2px;" />&nbsp;Inactive<br />' +
  	'</div>';
  controlUI.appendChild(controlText);
}


function doNothing() {}

function renderIcon(val){
	var IMG_DOWNLOAD = 'images/accept.png';
	return '<a href="documents/' + val + '">'+ '<img src="'+IMG_DOWNLOAD+'" /></a>';
}
function renderIcon2(val){
	var IMG_DOWNLOAD = 'images/accept.png';
	return '<a href="documents/biddersPresentation/' + val + '">'+ '<img src="'+IMG_DOWNLOAD+'" /></a>';
}
function renderIcon3(val){
	var IMG_DOWNLOAD = 'images/accept.png';
	return '<a href="documents/progressReport/' + val + '">'+ '<img src="'+IMG_DOWNLOAD+'" /></a>';
} 
function renderIcon4(val){
	var IMG_DOWNLOAD = 'images/accept.png';
	return '<a href="' + val + '" target="_blank">'+ '<img src="'+IMG_DOWNLOAD+'" /></a>';
}

function renderIcon5(val){
	var IMG_DOWNLOAD = 'images/accept.png';
	return '<a href="#" onClick="editValue(\'' + val + '\')"><img src="'+IMG_DOWNLOAD+'" id="edit1" /></a>';
	//return '<input type="button" id="edit1" value="edit" onclick="editValue()" />';	
}
 function loadSiteInformation(siteId) {      	
			siteInformation.getForm().load({
			url:'ambil_data2.php?siteId='+siteId
		  });
    }

function editValue(a){
		var siteId = a;
		var win = Ext.create('widget.window', {
                title: 'Site Detail ' + siteId,
                closable: true,
                closeAction: 'hide',
                //animateTarget: this,
                width: 800,
                height: 500,
                layout: 'border',
                bodyStyle: 'padding: 5px;',
                items: [{					
                    region: 'center',
                    xtype: 'tabpanel',
					bodyStyle: 'background-color:#dfe8f5;',
                    items: [{						
                        title: 'Site Information',
						padding : 5,                        
						frame : false,	
						bodyStyle: 'background-color:#dfe8f5;',
						items :  [{								   
								   layout: 'column',
								   labelAlign: 'top',
								   bodyStyle: 'background-color:#dfe8f5;',
								   border: false,
								   frame: false,
								   defaults: {
									  xtype: 'container',									  
									  columnWidth: 0.5
								   },
								   items: [{
									  items: [siteInformation]
								   }, {
									  items: [{
										 xtype: 'textfield',
										 fieldLabel: 'Text2',										 
										 name: 'text2'										 
									  }]
								   }]
								}]
                    }, {
                        title: 'Site survet ESR',
                        html: 'Hello world 2'
                    }, {
                        title: 'Structural design',
                        html: 'Hello world 3',
                        closable: false
                    },{
                        title: 'ME & Grounding Design',
                        html: 'Hello world 3',
                        closable: false
                    }]
                }],
				 buttons: [{
						text: 'Save'
					},{
						text: 'Cancel',
						handler : function(){win.hide();}
					}]
            });
			
			win.show();			
			loadSiteInformation(a);
    
}

function loadMedia(a){
	Ext.get('media').load({
            url : 'getImages.php?siteId='+a,
            text : 'Loading ...',
            params : a,
            scripts : true
        });
}

function loadAuditReport(a){
	
	auditReportStore.proxy.url = 'auditReport_xml2.php?siteId='+a;
	auditReportGrid.getStore().load();
	//doNothing();
}
function loadStrengtheningReport(a){
	
	strengtheningReportStore.proxy.url = 'strengtheningReport_xml.php?siteId='+a;
	strengtheningReportGrid.getStore().load();
	//doNothing();
}
