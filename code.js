var sidePanelTimer = null
window.addEventListener("load",function(){
  
})

function handleSidePanelOpenButtonClick(){
  let sidePannelWrapper = document.getElementById("idSidePannelWrapper")
  sidePannelWrapper.style.width = '250px'
  
}

function handleSidePanelContentMouseOut(){
  sidePanelTimer = setTimeout(closeSidePanel,500)
  
}

function handleSidePanelContentMouseOver(){
  clearTimeout(sidePanelTimer)
}
function closeSidePanel(){
  let sidePannelWrapper = document.getElementById("idSidePannelWrapper")
  sidePannelWrapper.style.width = '0px' 
}