({  
    doInit: function(cmp, evnt, helper){
         cmp.set('v.userPreference','Card'); 
    }, 
    handleView: function(component,event,helper) {
        var preferance = component.get('v.userPreference');
        if(preferance === 'List'){ 
            preferance = 'Card'
        }
        else{
            preferance = 'List'
        }
        component.set('v.userPreference',preferance); 
    },
    changeSplit: function(component,event,  helper) {  
        component.set("v.isSplitView", !component.get("v.isSplitView"));
    }
    
})