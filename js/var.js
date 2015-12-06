var form_addUser = Ext.create('Ext.form.Panel', {
        layout: 'absolute',
        url: 'addUser.php',
        defaultType: 'textfield',
        border: false,

        items: [{
            fieldLabel: 'Name',
            fieldWidth: 60,
            msgTarget: 'side',
            allowBlank: false,
            x: 5,
            y: 5,
            name: 'to',
            anchor: '-5'  // anchor width by percentage
        }, {
            fieldLabel: 'Username',
            fieldWidth: 60,
            x: 5,
            y: 35,
            name: 'subject',
            anchor: '-5'  // anchor width by percentage
        },{
            fieldLabel: 'Email',
            fieldWidth: 60,
            x: 5,
            y: 65,
            name: 'subject',
            anchor: '-5'  // anchor width by percentage
        },{
            fieldLabel: 'Password',
			inputType : 'password',
            fieldWidth: 60,
            x: 5,
            y: 95,
            name: 'subject',
            anchor: '-5'  // anchor width by percentage
        },{
            fieldLabel: 'Confirm Password',
            fieldWidth: 60,
			inputType : 'password',
            x: 5,
            y: 125,
            name: 'subject',
            anchor: '-5'  // anchor width by percentage
        }]
    });

var win_addUser = Ext.create('Ext.window.Window', {
        title: 'Add New User',
        width: 400,
        height: 250,
        minWidth: 300,
        minHeight: 250,		
		closeAction : 'hide',
        layout: 'fit',
        plain:true,
        items: form_addUser,

        buttons: [{
            text: 'Add',
			handler : function(){alert('Add User');}
        },{
            text: 'Cancel',
			handler : function(){win_addUser.hide();}
        }]
    });

var menu = Ext.create('Ext.menu.Menu', {
        id: 'mainMenu',        
        items: [
            {text: 'Add New User',iconCls : 'addUser', handler : function(){
																			win_addUser.show();}
																			}, 
			{text : 'Edit User',iconCls : 'editUser', handler : function(){alert('edit user');}}
        ]
    });


//general Information tab
var generalInformation = new Ext.FormPanel({
	xtype : 'container',
	border : 0,
	url:'ambil_data.php',
	items : [{
				xtype: 'textfield',
				    name: 'siteId',				    
				    fieldLabel: 'Site ID'
				},{
				xtype: 'textfield',
				    name: 'region',
				    fieldLabel: 'Region'
				},{
				xtype: 'textfield',
				    name: 'siteName',
				    fieldLabel: 'Site Name'
				},{
				xtype: 'textarea',
				    name: 'address',
				    fieldLabel: 'Address'
				},{
				xtype: 'textfield',
				    name: 'ownersName',
				    fieldLabel: 'Owners Name'
				},{
				xtype: 'textfield',
				    name: 'siteLocation',
				    fieldLabel: 'Site Loc'
				},{
				xtype: 'textfield',
				    name: 'towerType',
				    fieldLabel: 'Tower Type'
				},{
				xtype: 'textfield',
				    name: 'height',
				    fieldLabel: 'Height'
				},{
				xtype: 'textfield',
				    name: 'towerDesign',
				    fieldLabel: 'Tower Design'
				},{
				xtype: 'textfield',
				    name: 'siteStatus',
				    fieldLabel: 'Site Status'
				}]
})

var siteInformation = new Ext.FormPanel({
	xtype : 'container',
	border : 0,
	url:'ambil_data2.php',
	bodyStyle: 'background-color:#dfe8f5;',
	items : [{
				xtype: 'textfield',
				    name: 'siteId2',				    
				    fieldLabel: 'Site ID',
					disabled : true
				},{
				xtype: 'textfield',
				    name: 'region2',
				    fieldLabel: 'Region'
				},{
				xtype: 'textfield',
				    name: 'siteName2',
				    fieldLabel: 'Site Name'
				},{
				xtype: 'textarea',
				    name: 'address2',
				    fieldLabel: 'Address'
				},{
				xtype: 'textfield',
				    name: 'ownersName2',
				    fieldLabel: 'Owners Name'
				},{
				xtype: 'textfield',
				    name: 'siteLocation2',
				    fieldLabel: 'Site Loc'
				},{
				xtype: 'textfield',
				    name: 'towerType2',
				    fieldLabel: 'Tower Type'
				},{
				xtype: 'textfield',
				    name: 'height2',
				    fieldLabel: 'Height'
				},{
				xtype: 'textfield',
				    name: 'towerDesign2',
				    fieldLabel: 'Tower Design'
				},{
				xtype: 'textfield',
				    name: 'siteStatus2',
				    fieldLabel: 'Site Status'
				}]
})


//antennas tab
var antennas = {
	xtype : 'container',	
       border : 0,
	items : [{
		
				xtype: 'textfield',
				name: 'tenantName',
   			        fieldLabel: 'Tenant Name'
			    },{
				xtype: 'textfield',
				name: 'typeOfAntenna',
   			        fieldLabel: 'Type of Antenna'
			    },{
				xtype: 'textfield',
				name: 'sizeAntenna',
   			        fieldLabel: 'Size of Antenna'
			    },{
				xtype: 'textfield',
				name: 'manufacture',
   			        fieldLabel: 'Manufacture'
			    },{
				xtype: 'textfield',
				name: 'modelNumber',
   			        fieldLabel: 'Model Number'
			    },{
				xtype: 'textfield',
				name: 'elevation',
   			        fieldLabel: 'Elevation'
			    },{
				xtype: 'textfield',
				name: 'azimuth',
   			        fieldLabel: 'Azimuth'
			    },{
				xtype: 'textfield',
				name: 'mountedonLeg',
   			        fieldLabel: 'Mounted on Leg'
			    },{
				xtype: 'textfield',
				name: 'feederSize',
   			        fieldLabel: 'Feeder Size'
			    },{
				xtype: 'textfield',
				name: 'feederType',
   			       fieldLabel: 'Feeder Type'  
			    },{
				xtype: 'textfield',
				name: 'squareMeters',
   			       fieldLabel: 'Square Meters'  
			    },{
				xtype: 'textarea',
				name: 'remarks',
   			       fieldLabel: 'Remarks'  
			    }]
};
//site survey tab
var siteSurvey = {
	xtype : 'container',	
       border : 0,
	items : [{
		
				xtype: 'textfield',
				name: 'sketches',
   			        fieldLabel: 'Sketches'
			    },{
				xtype: 'textfield',
				name: 'hammerTest',
   			        fieldLabel: 'Hammer Test'
			    },{
				xtype: 'textfield',
				name: 'ferroScan',
   			        fieldLabel: 'Ferro Scan'
			    },{
				xtype: 'textfield',
				name: 'surveyDataComplete',
   			        fieldLabel: 'Survey Data Complete'
			    },{
				xtype: 'textarea',
				name: 'remarks',
   			        fieldLabel: 'Remarks'
			    }]
};

//structural Design
var structuralDesign = {
	xtype : 'container',	
       border : 0,
	items : [{
		
				xtype: 'textfield',
				name: 'analysisType',
   			        fieldLabel: 'Analysis Type'
			    },{
				xtype: 'textfield',
				name: 'surveyType',
   			        fieldLabel: 'Survey Type'
			    },{
				xtype: 'textfield',
				name: 'structuralSurvey',
   			        fieldLabel: 'Structural Survey'
			    },{
				xtype: 'textfield',
				name: 'groundingSurvey',
   			        fieldLabel: 'Grounding Survey'
			    },{
				xtype: 'textfield',
				name: 'structuralDrafter',
   			        fieldLabel: 'Structural Drafter'
			    },{
				xtype: 'textfield',
				name: 'strenghtDesignCompleted',
   			        fieldLabel: 'Strenghtening Design Completed'
			    },{
				xtype: 'textfield',
				name: 'maintenanceDesignCompleted',
   			        fieldLabel: 'Maintenance Design Completed'
			    },{
				xtype: 'textfield',
				name: 'triangulationOnly',
   			        fieldLabel: 'Triangulation Only'
			    },{
				xtype: 'textfield',
				name: 'totalWeight',
   			        fieldLabel: 'Total Weight'
			    },{
				xtype: 'textarea',
				name: 'comments',
   			        fieldLabel: 'Comments'
			    }]
};

//ME Grounding
var meGrounding = {
	xtype : 'container',	
       border : 0,
	items : [{
		
				xtype: 'textfield',
				name: 'surveyCompany',
   			        fieldLabel: 'Survey Company'
			    },{
				xtype: 'textfield',
				name: 'poRelease',
   			        fieldLabel: 'PO Release'
			    },{
				xtype: 'textfield',
				name: 'surveyTeam',
   			        fieldLabel: 'Survey Team'
			    },{
				xtype: 'textfield',
				name: 'surveyEngineer',
   			        fieldLabel: 'Survey Engineer'
			    },{
				xtype: 'textfield',
				name: 'surveyPlanDate',
   			        fieldLabel: 'Survey Plan Date'
			    },{
				xtype: 'textfield',
				name: 'surveyActualDate',
   			        fieldLabel: 'Survey Actual date'
			    }]
};

//sitac tab
var sitac = {
	xtype : 'container',	
       border : 0,
	items : [{
		
				xtype: 'textfield',
				name: 'sitacWork',
   			        fieldLabel: 'Sitac Work'
			    },{
				xtype: 'textfield',
				name: 'sitacWorkComp',
   			        fieldLabel: 'Sitac Work Complete'
			    },{
				xtype: 'textfield',
				name: 'cpApproved',
   			        fieldLabel: 'CP Approved'
			    },{
				xtype: 'textfield',
				name: 'banBakApplied',
   			        fieldLabel: 'BAN/BAK Applied'
			    },{
				xtype: 'textfield',
				name: 'banBakApproved',
   			        fieldLabel: 'BAN/BAK Approved'
			    },{
				xtype: 'textfield',
				name: 'iwApplied',
   			        fieldLabel: 'IW Applied'
			    },{
				xtype: 'textfield',
				name: 'iwApproved',
   			        fieldLabel: 'IW Approved'
			    },{
				xtype: 'textfield',
				name: 'acquisition',
   			        fieldLabel: 'Acquisition'
			    },{
				xtype: 'textfield',
				name: 'ajbPksApplied',
   			        fieldLabel: 'AJB/PKS Applied'
			    },{
				xtype: 'textfield',
				name: 'ajbPksApproved',
   			       fieldLabel: 'AJB/PKS Approved'  
			    },{
				xtype: 'textfield',
				name: 'landPayment',
   			       fieldLabel: 'Land Payment'  
			    },{
				xtype: 'textfield',
				name: 'IP/RT/IMBApplied',
   			       fieldLabel: 'IP/RT/IMB Applied'  
			    },{
				xtype: 'textfield',
				name: 'IP/RT/IMBApproved',
   			       fieldLabel: 'IP/RT/IMB Approved'  
			    },{
				xtype: 'textfield',
				name: 'CoordinationFee',
   			       fieldLabel: 'Co-ordination fee'  
			    },{
				xtype: 'textfield',
				name: 'TSSStart',
   			       fieldLabel: 'TSS Start'  
			    },{
				xtype: 'textfield',
				name: 'TSSCompleted',
   			       fieldLabel: 'TSS Completed'  
			    },{
				xtype: 'textfield',
				name: 'SoilTestStarted',
   			       fieldLabel: 'Soil Test Started'  
			    },{
				xtype: 'textfield',
				name: 'SoilTestCompleted',
   			       fieldLabel: 'Soil Test Completed'  
			    },{
				xtype: 'textfield',
				name: 'FoundationDesignStarted',
   			       fieldLabel: 'Foundation Design Started'  
			    },{
				xtype: 'textfield',
				name: 'FoundationDesignCompleted',
   			       fieldLabel: 'Foundation Design Completed'  
			    },{
				xtype: 'textfield',
				name: 'FoundationDesignApproved',
   			       fieldLabel: 'Foundation Design Approved'  
			    },{
				xtype: 'textfield',
				name: 'PLNApplication',
   			       fieldLabel: 'PLNApplication'  
			    },{
				xtype: 'textfield',
				name: 'PLNApproved',
   			       fieldLabel: 'PLN Approved'  
			    },{
				xtype: 'textfield',
				name: 'PowerConnectionLoad',
   			       fieldLabel: 'Power Connection Load'  
			    },{
				xtype: 'textfield',
				name: 'Transformer Required',
   			       fieldLabel: 'Transformer Required'  
			    },{
				xtype: 'textfield',
				name: 'LeasePeriod',
   			       fieldLabel: 'Lease Period'  
			    }]
};


var auditSitesData = Ext.create('Ext.data.Store', {
    fields: ['au', 'audit'],
    data : [
	       {"au":"2500", "audit":"2500 Sites"},	    
	       {"au":"500", "audit":"500 Desktop Study Sites"},
               {"au":"125", "audit":"125 Site Inspection"},
	       {"au":"375", "audit":"375 Desktop Study Sites"}
    ]
});

var filterMarkerHandler = function (){
var auditSites = Ext.getCmp("auditSitesId").getValue();

	if(auditSites == "2500 Sites"){			
		      var layer = new google.maps.FusionTablesLayer({
		        query: {select: 'lat',from: tableid}
		        });	
		      zoom = 5;
			  center = new google.maps.LatLng(-1.265386,116.8312);
	}
	else if(auditSites == "500 Desktop Study Sites"){			
		      var layer = new google.maps.FusionTablesLayer({
		        query: {select: 'lat',from: tableid_500}
		        });	
		      center = new google.maps.LatLng(-6.468556,106.728306);
		      zoom = 5;
	}
	else if(auditSites == "125 Site Inspection"){			
		      var layer = new google.maps.FusionTablesLayer({
		        query: {select: 'lat',from: tableid_125}, styles: [{markerOptions: {iconName : "small_red"}
        },{where: "status = '1'",markerOptions: {iconName: "small_blue"}
        }]

		        });	
		      center = new google.maps.LatLng(-1.265386,116.8312);
		      zoom = 5;
	}
	else if(auditSites == "375 Desktop Study Sites"){			
		      var layer = new google.maps.FusionTablesLayer({
		        query: {select: 'lat',from: tableid_375}
		        });	
		      center = new google.maps.LatLng(-1.265386,116.8312);
		      zoom = 5;
	}

	

		    var map = new google.maps.Map(document.getElementById('map_canvas'), {
		    center: center,
		    zoom: zoom,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		  	});
		  	layer.setMap(map); 
		  	
		  	//set legend
		    var legendDiv = document.createElement('DIV');
		    var legend = new Legend(legendDiv, map);
		    legendDiv.index = 1;
		    //map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legendDiv);  
	
		    //add a click listener to the layer
		    google.maps.event.addListener(layer, 'click', function(e) {  
		    siteId = e.row['siteId'].value;//passing parameter
		    generalInformation.getForm().load({
		    url:'ambil_data.php?siteId='+siteId
		    });
		    //loadMedia(siteId);
		    loadAuditReport(siteId);
            });
    };


var formFilterMarker = Ext.create('Ext.form.Panel', {
        //url:'save-form.php',
        frame:false,       
	 border:0,
        bodyStyle:'padding:2px 2px 0',
        width: '100%',
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 100
        },
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
		    xtype : 'combobox',
		    store : auditSitesData,
		    id : 'auditSitesId',
	        queryMode: 'local',
	        displayField: 'audit',            
		    fieldLabel : 'Filter Sites',
		    name : 'auditSites'
		}],

        buttons: [{
            text: 'Load',
	        handler: filterMarkerHandler
        }]
    });




//documents data array
   
Ext.define('documents',{
        extend: 'Ext.data.Model',
        fields: [
        	{name: 'id', type: 'int'},
            {name: 'fileTitle', type: 'string'},
	        {name: 'fileName',  type: 'string'},
    	    {name: 'tgl',       type: 'string'},
    	    {name: 'admin',  type: 'string'}
        ]
    });
/*
var genDocStore = Ext.create('Ext.data.Store', {
        model: 'documents',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            //url: 'generalDocuments_xml.php',
            url: 'generalDocuments.xml',
			// the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "document" tag
                record: 'document'
            }
        }
    });   
 */   
 /*
var biddersPresentation = Ext.create('Ext.data.Store', {
        model: 'documents',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'biddersPresentation.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "document" tag
                record: 'document'
            }
        }
    });  
	*/

	/*
	var progressReport = Ext.create('Ext.data.Store', {
	        model: 'documents',
	        autoLoad: true,
	        proxy: {
	            // load using HTTP
	            type: 'ajax',
	            url: 'progressReport.xml',
	            // the return will be XML, so lets set up a reader
	            reader: {
	                type: 'xml',
	                // records will have an "document" tag
	                record: 'document'
	            }
	        }
	    });  
		*/
		
/*
var gridDocuments = Ext.create('Ext.grid.Panel', {
        store: genDocStore,
        columns: [
            {text: "File Title", flex: 1, dataIndex: 'fileTitle', sortable: true},
            {text: "Date", width: 50, dataIndex: 'tgl', sortable: true},
            {text: "File", width: 30, dataIndex: 'fileName', sortable: false, renderer : renderIcon}
        ],
        width: '100%',
        height: '100%',
        border: 0,
        viewConfig : {
        stripeRows : true
        }
    });
*/	
//table view Grid
Ext.define('siteInfo',{
        extend: 'Ext.data.Model',
        fields: [        	
            {name: 'siteId', type: 'string'},
	        {name: 'region',  type: 'string'},
    	    {name: 'address',  type: 'string'},    	    
    	    {name: 'siteCategory',  type: 'string'},    	    
    	    {name: 'ownersName',  type: 'string'},    	    
    	    {name: 'siteLocation',  type: 'string'},    	    
    	    {name: 'height',  type: 'string'},    	    
    	    {name: 'towerDesign',  type: 'string'},  	    
    	    {name: 'analysisType',  type: 'string'},  	    
    	    {name: 'surveyType',  type: 'string'},  	    
    	    {name: 'lat',  type: 'string'},  	    
    	    {name: 'long',  type: 'string'}  	    
        ]
    });

var siteInformationStore = Ext.create('Ext.data.Store', {
        model: 'siteInfo',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'siteInformation_xml.php',
			// the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "site" tag
                record: 'site'
            }
        }
    });   

var tableGrid = Ext.create('Ext.grid.Panel', {
        store: siteInformationStore,
        columns: [
            {text: "Site ID", flex: 1, dataIndex: 'siteId', sortable: true},
            {text: "Region", flex:1, dataIndex: 'region', sortable: true},
            {text: "Address", width:400, dataIndex: 'address', sortable: true},
			{text: "Lat", flex:1, dataIndex: 'long', sortable: true},
			{text: "Long", flex:1, dataIndex: 'long', sortable: true},
            {text: "Site Category", flex:1, dataIndex: 'siteCategory', sortable: true},
            {text: "Owners Name", flex:1, dataIndex: 'ownersName', sortable: true},
            {text: "Site Location", flex:1, dataIndex: 'siteLocation', sortable: true},
            {text: "Height", flex:1, dataIndex: 'height', sortable: true},
            {text: "Tower Design", flex:1, dataIndex: 'towerDesign', sortable: true},
            {text: "Analysis Type", flex:1, dataIndex: 'analysisType', sortable: true},
            {text: "Survey Type", flex:1, dataIndex: 'surveyType', sortable: true},
            {text: "Action", width:40, dataIndex: 'siteId', sortable: true, renderer : renderIcon5}
        ],
        width: '99%',
        height: '100%',
        border: 0,
        viewConfig : {
        stripeRows : true
        }
    });
//
 /*   
var gridBidders = Ext.create('Ext.grid.Panel', {
        store: biddersPresentation,
        columns: [
            {text: "File Title", flex: 1, dataIndex: 'fileTitle', sortable: true},
            {text: "Date", width: 50, dataIndex: 'tgl', sortable: true},
            {text: "File", width: 30, dataIndex: 'fileName', sortable: false, renderer : renderIcon2}
        ],
        width: '100%',
        height: '100%',
        border: 0,
        viewConfig : {
        stripeRows : true
        }
    });
	*/

	/*
	var gridProgressReport = Ext.create('Ext.grid.Panel', {
        store: progressReport,
        columns: [
            {text: "File Title", flex: 1, dataIndex: 'fileTitle', sortable: true},
            {text: "Date", width: 50, dataIndex: 'tgl', sortable: true},
            {text: "File", width: 30, dataIndex: 'fileName', sortable: false, renderer : renderIcon3}
        ],
        width: '100%',
        height: '100%',
        border: 0,
        viewConfig : {
        stripeRows : true
        }
    });
	
	*/
	/*
	var gridProgressReport2 = Ext.create('Ext.grid.Panel', {
	        store: progressReport,
	        columns: [
	            {text: "File Title", flex: 1, dataIndex: 'fileTitle', sortable: true},
	            {text: "Date", width: 50, dataIndex: 'tgl', sortable: true},
	            {text: "File", width: 30, dataIndex: 'fileName', sortable: false, renderer : renderIcon3}
	        ],
	        width: '100%',
	        height: '100%',
	        border: 0,
	        viewConfig : {
	        stripeRows : true
	        }
	    });
	*/
	


//load grid for audit report (grid ini akan load setelah mendapatkan parameter siteId dari map click)
var auditReportStore = Ext.create('Ext.data.Store',{
	model: 'documents',
	autoLoad: true,
	proxy:{
		type: 'ajax',
		url: 'auditReport_xml2.php',
		reader: {
			type: 'xml',
			record: 'document'
		}
	}
});	
var auditReportGrid = Ext.create('Ext.grid.Panel',{
	store: auditReportStore,
	columns: [
		{text: "File Name", flex: 1, dataIndex: 'fileTitle', sortable: true},
		{text: "File", width: 30, dataIndex: 'fileName', sortable: false, renderer: renderIcon4}
	],
		width: '100%',
		height: '100%',
		border: 0,
		viewConfig: {
		stripeRows : true
	}	
});
//end of load grid for audit report

/*
//load grid for strengthening report (grid ini akan load setelah mendapatkan parameter siteId dari map click)
var strengtheningReportStore = Ext.create('Ext.data.Store',{
	model: 'documents',
	autoLoad: true,
	proxy:{
		type: 'ajax',
		url: 'strengtheningReport_xml2.php',
		reader: {
			type: 'xml',
			record: 'document'
		}
	}
});	
*/

/*
var strengtheningReportGrid = Ext.create('Ext.grid.Panel',{
	store: strengtheningReportStore,
	columns: [
		{text: "File Name", flex: 1, dataIndex: 'fileTitle', sortable: true},
		{text: "File", width: 30, dataIndex: 'fileName', sortable: false, renderer: renderIcon4}
	],
	width: '100%',
	height: '100%',
	border: 0,
	viewConfig: {
		stripeRows : true
	}	
});
*/

//end of load grid for strengthening report

//site Detail Form panel
//end site detail form panel
