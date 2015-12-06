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
				    name: 'areaCode',
				    fieldLabel: 'Area Code'
				},{
				xtype: 'textfield',
				    name: 'siteName',
				    fieldLabel: 'Site Name'
				},{
				xtype: 'textfield',
				    name: 'areaName',
				    fieldLabel: 'Area Name'
				},{
				xtype: 'textfield',
				    name: 'lat',
				    fieldLabel: 'Lattitude'
				},{
				xtype: 'textfield',
				    name: 'long',
				    fieldLabel: 'Longitude'
				},{
				xtype: 'textarea',
				    name: 'address',
				    fieldLabel: 'Address'
				},{
				xtype: 'textfield',
				    name: 'city',
				    fieldLabel: 'City'
				},{
				xtype: 'textfield',
				    name: 'siteType',
				    fieldLabel: 'Site Type'
				},{
				xtype: 'textfield',
				    name: 'buildingHeight',
				    fieldLabel: 'Building Height'
				},{
				xtype: 'textfield',
				    name: 'towerType',
				    fieldLabel: 'Tower Type'
				},{
				xtype: 'textfield',
				    name: 'towerHeight',
				    fieldLabel: 'Tower Height'
				},{
				xtype: 'textfield',
				    name: 'systemColo',
				    fieldLabel: 'System Co Loc'
				},{
				xtype: 'textfield',
				    name: 'shelterDimension',
				    fieldLabel: 'Shelter Dimension'
				},{
				xtype: 'textfield',
				    name: 'shelterPosition',
				    fieldLabel: 'Shelter Position'
				}]
})


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
	       {"au":"4000", "audit":"4000 Sites"},	    
	       {"au":"11000", "audit":"11000 sites"},
           {"au":"170", "audit":"170 sites"},
           {"au":"combat", "audit":"Combat sites"}
    ]
});

var filterMarkerHandler = function (){
    var auditSites = Ext.getCmp("auditSitesId").getValue();

	if(auditSites == "137 sites"){
		var layer = new google.maps.FusionTablesLayer({
	        query: {select: 'lat',from: tableid, where : "audit = '1'"},
	        styles: [{markerOptions: {iconName : "small_red"}
	        }]
	        });
	}
	else if(auditSites == "4000 Sites"){
			/*var layer = new google.maps.FusionTablesLayer({
		        query: {select: 'lat',from: tableid},
		        styles: [{markerOptions: {iconName : "small_blue"}
		        },{where: "audit = '1'",markerOptions: {iconName: "small_red"}
		        }]
		        });	*/
		      var layer = new google.maps.FusionTablesLayer({
		        query: {select: 'lat',from: tableid}
		        });	
		      zoom = 5;
			  center = new google.maps.LatLng(-1.265386,116.8312);
	}
	else if(auditSites == "Combat sites"){			
		      var layer = new google.maps.FusionTablesLayer({
		        query: {select: 'lat',from: tableid_combat}
		        });	
		      center = new google.maps.LatLng(-6.468556,106.728306);
		      zoom = 9;
	}
	else if(auditSites == "11000 sites"){			
		      var layer = new google.maps.FusionTablesLayer({
		        query: {select: 'lat',from: tableid_11000}
		        });	
		      center = new google.maps.LatLng(-1.265386,116.8312);
		      zoom = 5;
	}
	else{
		//var layer = new google.maps.FusionTablesLayer(tableid, {query: "SELECT lat FROM "+tableid+" WHERE region = '" + nilai + "'"});  
		 var layer = new google.maps.FusionTablesLayer({
	        query: {select: 'lat',from: tableid_170},
	        styles: [{markerOptions: {iconName : "small_red"}
	        }]
	        });
	        zoom = 5;
     		center = new google.maps.LatLng(-1.265386,116.8312);
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
		    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legendDiv);  
	
		    //add a click listener to the layer
		    google.maps.event.addListener(layer, 'click', function(e) {  
		    siteId = e.row['siteId'].value;//passing parameter
		    generalInformation.getForm().load({
		    url:'ambil_data.php?siteId='+siteId
		    });
		    loadMedia(siteId);
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
		    fieldLabel : 'Audit Sites',
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
	


//load grid for audit report (grid ini akan load setelah mendapatkan parameter siteId dari map click)
var auditReportStore = Ext.create('Ext.data.Store',{
	model: 'documents',
	autoLoad: true,
	proxy:{
		type: 'ajax',
		url: 'auditReport_xml.php?siteId=03BKS178',
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
