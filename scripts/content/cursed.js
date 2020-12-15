Events.on(ClientLoadEvent, b => {
    Vars.ui.showCustomConfirm(
        "[red]hhh",
        "[red]h?",
        "No",
        "Yes",
        ()=>{
            print("h");
	    Core.app.exit();
        },
        ()=>{
	    Core.app.exit();
        }
    );
});
