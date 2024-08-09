// $(document).on("click", "#Pause_Menu_Play_Btn_Wood", function() {
//     $(this).addClass("Pause_Play_Btn_animation");
//     setTimeout(function() {
//         $("#Pause_Menu_inner_container_Wood").removeClass("show_Pause_Menu").addClass("hide_Pause_Menu");
//         $("#Pause_Menu_Play_Btn_Wood").removeClass("Pause_Play_Btn_animation");
//         $("#Pause_container_Wood").css("display", "block");
//         $("#Pause_container_Wood_Press").css("display", "none");
//     },200); 
// });

// $(document).on("click", "#Pause_Menu_Play_Btn_Stone", function() {          /*Stone */
//     $(this).addClass("Pause_Play_Btn_animation");
//     setTimeout(function() {
//         $("#Pause_Menu_inner_container_Stone").removeClass("show_Pause_Menu").addClass("hide_Pause_Menu");
//         $("#Pause_Menu_Play_Btn_Stone").removeClass("Pause_Play_Btn_animation");
//         $("#Pause_container_Stone").css("display", "block");
//         $("#Pause_container_Stone_Press").css("display", "none");
//     },200); 
// });
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// $(document).on("click", "#Pause_Menu_Home_Btn_Wood", function() {
//     $(this).addClass("Pause_Home_Btn_animation");
//     setTimeout(function() {
//     $("#Game_start_Wood").css("display", "none");
//     $("#Start_menu").css("display", "block");
//     $("#playBtnImg").css("display", "block");
//     $("#Pause_Menu_Home_Btn_Wood").removeClass("Pause_Home_Btn_animation");
//     $("#Pause_container_Wood").css("display", "block");
//     $("#Pause_container_Wood_Press").css("display", "none");
//     },200);
//     Wood_Sound_Check();
// });

// $(document).on("click", "#Pause_Menu_Home_Btn_Stone", function() {                /*Stone */
//     $(this).addClass("Pause_Home_Btn_animation");
//     setTimeout(function() {
//     $("#Game_start_Stone").css("display", "none");
//     $("#Start_menu").css("display", "block");
//     $("#playBtnImg").css("display", "block");
//     $("#Pause_Menu_Home_Btn_Stone").removeClass("Pause_Home_Btn_animation");
//     $("#Pause_container_Stone").css("display", "block");
//     $("#Pause_container_Stone_Press").css("display", "none");
//     },200);
//     Stone_Sound_Check();
// });
// ----------------------------------------------------------=------------------------------------------------------------------------------------------------------------------------------
// $(document).on("click", "#Pause_Btn_Wood", function() {
//     $("#Pause_Menu_inner_container_Wood").removeClass("hide_Pause_Menu").addClass("show_Pause_Menu").css("display", "block");
//     $("#Pause_container_Wood").css("display", "none");
//     $("#Pause_container_Wood_Press").css("display", "block");
// });

// $(document).on("click", "#Pause_Btn_Stone", function() {                       /*Stone */
//     $("#Pause_Menu_inner_container_Stone").removeClass("hide_Pause_Menu").addClass("show_Pause_Menu").css("display", "block");
//     $("#Pause_container_Stone").css("display", "none");
//     $("#Pause_container_Stone_Press").css("display", "block");
// });


// shape1 draggable---------------------------------------------
  //for draggable
    // const draggable = document.getElementById('shape1_container');
    // const targetArea = document.getElementById('crystal_block_grid');
    // let originalX, originalY, offsetX, offsetY, draggableRectBefore;
    
    // draggable.addEventListener('mousedown', (e) => {
    //     $("#shape1_container").css({"width": "117px", "z-index": "10"}); //CHECK HERE
    //     $(".showBlocks1").addClass("matchBlock");   //CHECK HERE
    //     const rect = draggable.getBoundingClientRect();
    //     draggableRectBefore = draggable.getBoundingClientRect();
    //     offsetX = e.clientX - rect.left;                            
    //     offsetY = e.clientY - rect.top;
    //     originalX = rect.left;
    //     originalY = rect.top;

    //     document.addEventListener('mousemove', onMouseMove);
    //     document.addEventListener('mouseup', onMouseUp);
    //     e.preventDefault();
    // });

    // let GridImgContainer = [];

    // function onMouseMove(e) {
    //     const rect = draggable.parentElement.getBoundingClientRect();
    //     const left = e.clientX - offsetX - rect.left;
    //     const top = e.clientY - offsetY - rect.top;
    
    //     draggable.style.left = `${left}px`;
    //     draggable.style.top = `${top}px`;

    //     let GILeft = [];
    //     let GIRight = [];
    //     let GITop = [];
    //     let GIBottom = [];
       

    //     for (let i = 1; i <= 100; i++) {
    //         GridImgContainer.push(`WoodGridImg${i}`);
    //         const GridImgRect = document.getElementById(`WoodGridImg${i}`).getBoundingClientRect();
    //         GILeft.push(GridImgRect.left);
    //         GIRight.push(GridImgRect.right);
    //         GITop.push(GridImgRect.top);
    //         GIBottom.push(GridImgRect.bottom);
    //     };

    //     const blocks = [];
    //     for (let i = 1; i <= 9; i++) {
    //         const block = document.getElementById(`Wood_shape1_block_${i}`);
    //         const rect = block.getBoundingClientRect();
    //         const BlockX = rect.left + rect.width / 2;
    //         const BlockY = rect.top + rect.height / 2;
    //         blocks.push({element : block, x : BlockX, y : BlockY});
    //     };

    //     for (let i = 0; i < 100; i++) {
    //         const WoodGrigImgId = document.getElementById(GridImgContainer[i]);
    //         const TargetArea = targetArea.getBoundingClientRect();
    //         const TAleft = TargetArea.left;
    //         const TAright = TargetArea.right;
    //         const TAtop = TargetArea.top;
    //         const TAbottom = TargetArea.bottom;

    //         let isVisible = blocks.some(block => {
    //             return block.element.style.visibility === "visible" && block.x > GILeft[i] && block.x < GIRight[i] && block.y > GITop[i] && block.y < GIBottom[i];
    //         });

    //         let inTargetArea = blocks.filter(block => block.element.style.visibility === "visible")
    //                                   .every(block => block.x > TAleft && block.x < TAright && block.y > TAtop && block.y < TAbottom)

    //         if(isVisible && inTargetArea) {
    //             WoodGrigImgId.style.visibility = "visible";
    //             WoodGrigImgId.style.filter = "opacity(0.6)";
    //         } else {
    //             WoodGrigImgId.style.visibility = "hidden";
    //         }
    //     };
    // };
    
    // function onMouseUp(e) {
    //     const targetRect = targetArea.getBoundingClientRect();
    //     const draggableRect = draggable.getBoundingClientRect();
    
    //     if (isWithinTargetArea(draggableRect, targetRect)) {
    //         const left = draggableRect.left - draggableRectBefore.left;
    //         const top = draggableRect.top - draggableRectBefore.top;
    
    //         draggable.style.left = `${left}px`;
    //         draggable.style.top = `${top}px`;
    
    //         $("#shape1_container").css({"width": "117px", "z-index": "10"});
    //     } else {
    //         const parentRect = draggable.parentElement.getBoundingClientRect();
    //         draggable.style.left = `${originalX - parentRect.left}px`;
    //         draggable.style.top = `${originalY - parentRect.top}px`;
    
    //         $("#shape1_container").css({"width": "90px"});
    //         $(".showBlocks1").removeClass("matchBlock");
    //     }

    //     for (let i = 0; i < 100; i++) {
    //         const WoodGrigImgId = document.getElementById(GridImgContainer[i]);
    //         if ((WoodGrigImgId.style.visibility === "visible") && (WoodGrigImgId.style.filter = "opacity(0.6)")) {
    //             WoodGrigImgId.style.visibility === "visible";
    //             WoodGrigImgId.style.filter = "opacity(1)";
    //             shape1_container.style.display = "none";
    //         } else if (WoodGrigImgId.style.visibility === "hidden"){
    //             WoodGrigImgId.style.visibility === "hidden";   
    //         }
    //     };
        
    //     document.removeEventListener('mousemove', onMouseMove);
    //     document.removeEventListener('mouseup', onMouseUp);

    // };
    
    // function isWithinTargetArea(draggableRect, targetRect) {
    //     return (
    //         draggableRect.left >= targetRect.left &&
    //         draggableRect.top >= targetRect.top &&
    //         draggableRect.right <= targetRect.right &&
    //         draggableRect.bottom <= targetRect.bottom
    //     );
    // };