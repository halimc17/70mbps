<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>XML Grid Example</title>
	<link rel="stylesheet" type="text/css" href="jslib/ext4/resources/css/ext-all.css" />	
	<script type="text/javascript" src="jslib/ext4/bootstrap.js"></script>
    <script type="text/javascript">
	
	Ext.require([
    'Ext.data.*',
    'Ext.grid.*'
]);

Ext.onReady(function(){
    Ext.define('Book',{
        extend: 'Ext.data.Model',
        fields: [
            // set up the fields mapping into the xml doc
            // The first needs mapping, the others are very basic
            {name: 'Author', mapping: 'ItemAttributes > Author'},
            'Title', 'Manufacturer', 'ProductGroup'
        ]
    });

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        model: 'Book',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'sheldon.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
                record: 'Item',
                idProperty: 'ASIN',
                totalRecords: '@total'
            }
        }
    });

    // create the grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [
            {text: "Author", flex: 1, dataIndex: 'Author', sortable: true},
            {text: "Title", width: 180, dataIndex: 'Title', sortable: true},
            {text: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
            {text: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
        ],
        renderTo:'example-grid',
        width: 540,
        height: 200
    });
});
	</script>
	
</head>
<body>
    <h1>XML Grid Example</h1>
    <p>This example shows how to load a grid with XML data.</p>
    
    <p>Note that the js is not minified so it is readable. See <a href="xml-grid.js">xml-grid.js</a>.</p>
    
    <p>The data in the grid is loaded from <a href="sheldon.xml">sheldon.xml</a>, which is directly from an Amazon.com search.</p>
    
    <!-- a place holder for the grid. requires the unique id to be passed in the javascript function, and width and height ! -->
    <div id="table_grid"></div>
</body>
</html>
