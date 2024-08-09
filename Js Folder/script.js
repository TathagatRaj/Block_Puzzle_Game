let load, width, woodShape1, woodShape2, woodShape3, Wood_shape1, Wood_shape2, Wood_shape3;
let timerInterval = null;

window.onload = function () {
    LoadingBar();
    Count();
    setTimeout(function () {
        $("#body").addClass("body_bg");
    }, 1100);
};

function LoadingBar() {
    width = 0;
    const interval = setInterval(() => {
        width += 2.84;
        $("#Loader").css("width", width + "px");

        if (width >= 284) {
            clearInterval(interval);
            $("#Loader").css("display", "block");
            setTimeout(function () {
                $("#Loading_Screen").css("display", "none");
                $("#Home").css("display", "block");
            }, 100);

        }
    }, 10);
}

function Count() {
    load = 0;
    const counting = setInterval(() => {
        load += 1;
        $("#counting").text(load + "%");

        if (load >= 100) {
            clearInterval(counting);
            setTimeout(function () {
                $("#Loading_Screen").css("display", "none");
                $("#Home").css("display", "block");
            }, 100);
        }
    }, 10);
}

function Timer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    console.log("Called");
    let maxTime = 60;
    $("#CountDown").text(maxTime);
    timerInterval = setInterval(() => {
        maxTime -= 1;
        $("#CountDown").text(maxTime);

        if (maxTime <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
}

$(document).on("click", "#playBtnImg", function () {
    $(this).addClass("btnClick");
    setTimeout(function () {
        $("#playBtnImg").removeClass("btnClick");
    }, 300);
});

$(document).on("click", "#playBtn", function () {
    setTimeout(function () {
        $("#Start_menu").css("display", "none");
        $("#playBtnImg").css("display", "none");
        $("#Game_start_Wood").css("display", "block");
    }, 250);
    $("#Pause_Menu_inner_container_Wood").removeClass("show_Pause_Menu hide_Pause_Menu").addClass("PlayBtn_Pause_menu");
    $("#Pause_Menu_inner_container_Stone").removeClass("show_Pause_Menu hide_Pause_Menu").addClass("PlayBtn_Pause_menu");
    $("#crystal_block_grid").css("display", "block");
    ThreeBlocks();
    Timer();

});

$(document).on("click", "#Pause_Menu_SoundON_Btn_Wood", function () {
    $("#Pause_Menu_SoundON_Btn_Wood").css("display", "none");
    $("#Pause_Menu_SoundOFF_Btn_Wood").css("display", "block");
});

$(document).on("click", "#Pause_Menu_SoundON_Btn_Stone", function () {          /*Stone */
    $("#Pause_Menu_SoundON_Btn_Stone").css("display", "none");
    $("#Pause_Menu_SoundOFF_Btn_Stone").css("display", "block");
});

$(document).on("click", "#Pause_Menu_SoundOFF_Btn_Wood", function () {
    $("#Pause_Menu_SoundOFF_Btn_Wood").css("display", "none");
    $("#Pause_Menu_SoundON_Btn_Wood").css("display", "block");
});

$(document).on("click", "#Pause_Menu_SoundOFF_Btn_Stone", function () {            /*Stone*/
    $("#Pause_Menu_SoundOFF_Btn_Stone").css("display", "none");
    $("#Pause_Menu_SoundON_Btn_Stone").css("display", "block");
});

$(document).on("click", ".PauseBtn", function () {
    var type = $(this).data("type");

    $("#Pause_Menu_inner_container_" + type).removeClass("hide_Pause_Menu").addClass("show_Pause_Menu").css("display", "block");
    $("#Pause_container_" + type).css("display", "none");
    $("#Pause_container_" + type + "_Press").css("display", "block");
});

$(document).on("click", ".pauseMenuPlay", function () {
    var type = $(this).data("type");

    $(this).addClass("Pause_Play_Btn_animation");
    setTimeout(function () {
        $("#Pause_Menu_inner_container_" + type).removeClass("show_Pause_Menu").addClass("hide_Pause_Menu");
        $("#Pause_Menu_Play_Btn_" + type).removeClass("Pause_Play_Btn_animation");
        $("#Pause_container_" + type).css("display", "block");
        $("#Pause_container_" + type + "_Press").css("display", "none");
    }, 200);
});

$(document).on("click", ".pauseMenuHome", function () {
    var type = $(this).data("type");

    $(this).addClass("Pause_Home_Btn_animation");
    setTimeout(function () {
        $("#Game_start_" + type).css("display", "none");
        $("#Start_menu").css("display", "block");
        $("#playBtnImg").css("display", "block");
        $("#Pause_Menu_Home_Btn_" + type).removeClass("Pause_Home_Btn_animation");
        $("#Pause_container_" + type).css("display", "block");
        $("#Pause_container_" + type + "_Press").css("display", "none");
    }, 200);

    if (type === "Wood") {
        Wood_Sound_Check();
    } else if (type === "Stone") {
        Stone_Sound_Check();
    }
});

//From here reduce the code
function Mode1(ModeBtn, DNone, DBlock, InnerContain, PauseContain, PauseContainPress, SoundCheck) {
    $(document).on("click", ModeBtn, function () {
        $(this).addClass("Pause_Mode_Btn_animation");
        setTimeout(function () {
            $(ModeBtn).removeClass("Pause_Mode_Btn_animation");
            $(DNone).css("display", "none");
            $(DBlock).css("display", "block");
            $(InnerContain).removeClass("show_Pause_Menu hide_Pause_Menu").addClass("PlayBtn_Pause_menu");
            $(PauseContain).css("display", "block");
            $(PauseContainPress).css("display", "none");
        }, 200);
        SoundCheck();
    });
}

Mode1 ("#Pause_Menu_Mode1_Btn_Wood", "#Game_start_Wood", "#Game_start_Stone", "#Pause_Menu_inner_container_Wood", "#Pause_container_Wood", "#Pause_container_Wood_Press", Wood_Sound_Check);
Mode1 ("#Pause_Menu_Mode1_Btn_Stone", "#Game_start_Stone", "#Game_start_Wood", "#Pause_Menu_inner_container_Stone", "#Pause_container_Stone", "#Pause_container_Stone_Press", Stone_Sound_Check);

function Mode_Sound_Check(mode1,mode2 ) {
    if ($(`#Pause_Menu_SoundON_Btn_${mode1}`).css("display") === "block") {
        $(`#Pause_Menu_SoundON_Btn_${mode2}`).css("display", "block");
        $(`#Pause_Menu_SoundOFF_Btn_${mode2}`).css("display", "none");
    } else if ($(`#Pause_Menu_SoundOFF_Btn_${mode1}`).css("display") === "block") {
        $(`#Pause_Menu_SoundOFF_Btn_${mode2}`).css("display", "block");
        $(`#Pause_Menu_SoundON_Btn_${mode2}`).css("display", "none");
    }
};

function Wood_Sound_Check() {
    Mode_Sound_Check("Wood","Stone");
};

function Stone_Sound_Check() {
    Mode_Sound_Check("Stone","Wood");
};

//  create three div containing block images
$(document).ready(function () {
    function createDiv(id) {                             //block conataining divs 
        const div = $("<div>");
        div.attr("id", id);
        div.addClass("woodBlock")
        return div;
    }

    //creating block images
    function createImg(src, width, id, container, block_class) {         
        const img = $("<img>");
        img.attr("src", src);
        img.attr("width", width);
        img.attr("id", id);
        img.addClass(block_class)
        $(container).append(img);
        return img;
    }

    //Calling both the above functions
    function generateBlocks() {                                
        for (let i = 1; i<= 3; i++) {
            $(`#woodBlock${i}`).append(createDiv(`shape${i}_container`));
        }

        for (let j = 1; j <= 3; j++) {
            const shapeCollector = `#shape${j}_container`;
            const woodArray = `Wood_shape${j}_block`;

            for (let i = 1; i <= 9; i++) {
                createImg("Images/wood_block.png", "30px", `${woodArray}_${i}`, shapeCollector, `showBlocks${j}`);
            }
        }
    }

    // Calling the function when the page loads
    (function () {                                 
        generateBlocks();
    })();

    //Wood Grid block images
    function wood_Grid(src, width, id, container, img_class) {          
        const img = $("<img>");
        img.attr("src", src);
        img.attr("width", width);
        img.attr("id", id);
        img.addClass(img_class);
        $(container).append(img);
        return img;
    };

    for (let i = 1; i <= 100; i++) {                                   //calling the above function
        wood_Grid("Images/wood_block.png", "39.2px", `WoodGridImg${i}`, "#crystal_block_grid", `woodGridImgs Row-${Math.ceil(i/10)} Col-${Math.abs(i) % 10}`);
    };

    // for dragging the block shapes
    function getBlockCoordinates(woodShape) {
        const blocks = [];
        for (let i = 1; i <= 9; i++) {
            const block = document.getElementById(`${woodShape}_block_${i}`);
            if (block) {
                const rect = block.getBoundingClientRect();
                const BlockX = rect.left + rect.width / 2;
                const BlockY = rect.top + rect.height / 2;
                blocks.push({ element: block, x: BlockX, y: BlockY });
            }
        }
        return blocks;
    }

    // let ArrayBeforeRemove;
    // let previousLength = 0;
    // let lastScore = 0;
    const VisibleGridImg = [];
    const TotalPlacedBlocks = [];
    let TotalLength;
    function updateGridImages(gridImgContainer, blocks, targetArea) {
        const TargetArea = targetArea.getBoundingClientRect();
        const TAleft = TargetArea.left;
        const TAright = TargetArea.right;
        const TAtop = TargetArea.top;
        const TAbottom = TargetArea.bottom;

        let GILeft = [], GIRight = [], GITop = [], GIBottom = [], Visible_GILeft = [], Visible_GIRight = [], Visible_GITop = [], Visible_GIBottom = [];

        for (let i = 0; i < gridImgContainer.length; i++) {
            const GridImgRect = gridImgContainer[i].getBoundingClientRect();
            GILeft.push(GridImgRect.left);
            GIRight.push(GridImgRect.right);
            GITop.push(GridImgRect.top);
            GIBottom.push(GridImgRect.bottom);
        };

        for (let i = 0; i < VisibleGridImg.length; i++) {
            const VisibleGridImgRect = VisibleGridImg[i].getBoundingClientRect();
            Visible_GILeft.push(VisibleGridImgRect.left);
            Visible_GIRight.push(VisibleGridImgRect.right);
            Visible_GITop.push(VisibleGridImgRect.top);
            Visible_GIBottom.push(VisibleGridImgRect.bottom);
        } 

        let NotOnGridImg = true;

        if (VisibleGridImg.length > 0) {
            NotOnGridImg = blocks.every(block => {
                return !VisibleGridImg.some((visibleGridImg, i) => {
                    return block.element.style.visibility === "visible" &&
                        block.x > Visible_GILeft[i] && block.x < Visible_GIRight[i] &&
                        block.y > Visible_GITop[i] && block.y < Visible_GIBottom[i];
                });
            });
        }

        for (let i = 0; i < gridImgContainer.length; i++) {
            const WoodGridImgId = gridImgContainer[i];

            let isVisible = blocks.some(block => {
                return block.element.style.visibility === "visible" && block.x > GILeft[i] && block.x < GIRight[i] && block.y > GITop[i] && block.y < GIBottom[i];
            });

            let inTargetArea = blocks.filter(block => block.element.style.visibility === "visible")
                .every(block => block.x > TAleft && block.x < TAright && block.y > TAtop && block.y < TAbottom)

            if (isVisible && inTargetArea && NotOnGridImg && (!VisibleGridImg.includes(WoodGridImgId))) {
                WoodGridImgId.style.visibility = "visible";
                $(WoodGridImgId).addClass("LessOpacity");
            }
            else if (!VisibleGridImg.includes(WoodGridImgId)) {
                WoodGridImgId.style.visibility = "hidden";
            }
        };
    };

    // Add drag and drop function to the block
    function addDragAndDrop(shapeId, blockClass, woodShape) {
        const draggable = document.getElementById(`${shapeId}_container`);
        const targetArea = document.getElementById('crystal_block_grid');
        let originalX, originalY, offsetX, offsetY, draggableRectBefore;

        //When the mouse is clicked
        draggable.addEventListener('mousedown', (e) => {
            $(`#${shapeId}_container`).css({ "width": "117px", "z-index": "10" });
            $(`.${blockClass}`).addClass("matchBlock");
            const rect = draggable.getBoundingClientRect();
            draggableRectBefore = draggable.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            originalX = rect.left;
            originalY = rect.top;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            e.preventDefault();
        });

        // When the mouse is moved
        function onMouseMove(e) {
            const rect = draggable.parentElement.getBoundingClientRect();
            const left = e.clientX - offsetX - rect.left;
            const top = e.clientY - offsetY - rect.top;

            draggable.style.left = `${left}px`;
            draggable.style.top = `${top}px`;

            const gridImgContainer = [];
            for (let i = 1; i <= 100; i++) {
                gridImgContainer.push(document.getElementById(`WoodGridImg${i}`))
            }

            const blocks = getBlockCoordinates(woodShape);
            updateGridImages(gridImgContainer, blocks, targetArea);
        }

        // Return the block to its Original Position
        function OriginalPosition() {
            const parentRect = draggable.parentElement.getBoundingClientRect();
            draggable.style.left = `${originalX - parentRect.left}px`;
            draggable.style.top = `${originalY - parentRect.top}px`;

            $(`#${shapeId}_container`).css({ "width": "90px" });
            $(`.${blockClass}`).removeClass("matchBlock");
        }

        // When the mouse click is removed
        function onMouseUp(e) {
            const targetRect = targetArea.getBoundingClientRect();
            const draggableRect = draggable.getBoundingClientRect();

            if (isWithinTargetArea(draggableRect, targetRect)) {
                const left = draggableRect.left - draggableRectBefore.left;
                const top = draggableRect.top - draggableRectBefore.top;

                draggable.style.left = `${left}px`;
                draggable.style.top = `${top}px`;
                $(`#${shapeId}_container`).css({ "width": "117px", "z-index": "10" });
            } else {
                OriginalPosition();
            }

            const gridImgContainer = [];
            for (let i = 1; i <= 100; i++) {
                gridImgContainer.push(document.getElementById(`WoodGridImg${i}`));
            }

            for (let i = 0; i < gridImgContainer.length; i++) {
                const WoodGridImgId = gridImgContainer[i];
                if ((WoodGridImgId.style.visibility === "visible") && WoodGridImgId.classList.contains("LessOpacity")) {
                    $(WoodGridImgId).removeClass("LessOpacity").addClass("MoreOpacity");
                    VisibleGridImg.push(WoodGridImgId);
                    TotalPlacedBlocks.push(WoodGridImgId);
                    TotalLength = TotalPlacedBlocks.length;
                    
                    document.getElementById(`${shapeId}_container`).style.display = "none";
                } else if (WoodGridImgId.style.visibility === "hidden") {
                    WoodGridImgId.style.visibility === "hidden";
                    $(WoodGridImgId).removeClass("LessOpacity");
                    OriginalPosition();
                }
            };
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            DeleteWoodBlocks();
            DelNCreate();

            // Update Current Score
            function updateScore(newBlock) {
                if (typeof TotalLength !== "number" || isNaN(TotalLength)) {
                    return;
                }
                
                let lastScore = parseInt($("#LiveScore").text(), 10) || 0;
                let Score = TotalLength;
                const diff = TotalLength - newBlock;

                if (diff === 0) {
                    Score = newBlock;
                } else if (diff !== 0) {
                    Score = TotalLength + diff;
                }

                function ScoreAnimation() {
                    const increment = Math.max(1, Math.floor((Score - lastScore) / 50));
                    const countScore = setInterval(() => {
                        lastScore += increment;
                        $("#LiveScore").text(lastScore);
                        if (lastScore > localStorage.getItem("BestScore")) {
                            localStorage.setItem("BestScore", lastScore);
                            console.log("IF CONDITOIN TRUE");
                            
                        }
                        
                            document.getElementById("HighScore").innerHTML = localStorage.getItem("BestScore");
    
                        if (lastScore >= Score) {
                            clearInterval(countScore);
                            $("#LiveScore").text(Score); 
                        }
                    }, 10);
                    
                }
                
                if (lastScore !== Score) {
                    ScoreAnimation();
                }
                Timer();
            }
            updateScore(VisibleGridImg.length);

            
        };

        function isWithinTargetArea(draggableRect, targetRect) {
            return (
                draggableRect.left >= targetRect.left &&
                draggableRect.top >= targetRect.top &&
                draggableRect.right <= targetRect.right &&
                draggableRect.bottom <= targetRect.bottom
            );
        };
    }

    document.getElementById("HighScore").innerHTML = localStorage.getItem("BestScore");

    addMovement();
    function addMovement() {
        for (let i = 1; i<= 3; i++) {
            addDragAndDrop(`shape${i}`, `showBlocks${i}`, `Wood_shape${i}`);    
        }
    }

    // Delete shapes
    function deleteDiv(divId) {
        const divToDel = document.getElementById(divId);
        if (divToDel) {
            divToDel.remove();
        }
    }

    let ShapeContain = [];
    // Delete and Create Shapes
    function DelNCreate() {
        let shapeContain = [$("#shape1_container"),$("#shape2_container"),$("#shape3_container")];
        if (shapeContain.every(shape => shape.css("display") === "none")) {
            for (let i =1; i <= 3; i++) {
                deleteDiv(`shape${i}_container`);    
            }

            let shapeRemoved = [$("#shape1_container").length === 0, $("#shape2_container").length === 0, $("#shape3_container").length === 0]
            if (shapeRemoved[0] && shapeRemoved[1] && shapeRemoved[2]) {
                generateBlocks();
                ThreeBlocks();
                addMovement();
            } 
        }
    };

    // Destroy completed rows and columns
    function DeleteWoodBlocks() {
        function checkRowNCol (Selector, destroyed) {
            const imagesWithMoreOpacity = document.querySelectorAll(Selector);
            if(imagesWithMoreOpacity.length === 10) {
                let RemoveIds = [];
                imagesWithMoreOpacity.forEach(img => {
                    img.classList.remove('MoreOpacity');
                    img.style.visibility = 'hidden';
                    RemoveIds.push(img.id)
                  });
    
                for (let k = VisibleGridImg.length - 1; k >= 0; k--) {
                    if (RemoveIds.includes(VisibleGridImg[k].id)) {
                        VisibleGridImg.splice(k,1);
                    }
                }
                // Animate();
                if (destroyed === "Destroyed_Col0") {
                    $(".Destroyed_Col10").removeClass("DestroyBlockHidden").addClass("DestroyBlockVisible");
                    callAnime();
                    setTimeout(function () {
                        $(".Destroyed_Col10").removeClass("DestroyBlockVisible").addClass("DestroyBlockHidden");
                    }, 1000);
                } else {
                    $(`.${destroyed}`).removeClass("DestroyBlockHidden").addClass("DestroyBlockVisible");
                    callAnime();
                    setTimeout(function () {
                        $(`.${destroyed}`).removeClass("DestroyBlockVisible").addClass("DestroyBlockHidden");
                    }, 1000);
                }
            }
        }

        for (let row = 1; row <= 10; row++) {
            checkRowNCol(`.woodGridImgs.Row-${row}.MoreOpacity`, `Destroyed_Row${row}`);
        }

        for (let row = 0; row <= 9; row++) {
            checkRowNCol(`.woodGridImgs.Col-${row}.MoreOpacity`, `Destroyed_Col${row}`);
        }


        
       
    }
});


// 3 Unique random pattern 
function ThreeBlocks() {
    woodShape1 = randomShapes();

    function UniqueArray(excludeArray) {
        let newArray;
        do {
            newArray = randomShapes();
        } while (isArrayInList(newArray, excludeArray));
        return newArray;
    }

    function isArrayInList(array, list) {
        return list.some(existingArray => arraysEqual(array, existingArray) || arraysLengthEqual(array, existingArray));
    }

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    function arraysLengthEqual(arr1, arr2) {
        return arr1.length == arr2.length;
    }

    woodShape2 = UniqueArray([woodShape1]);
    woodShape3 = UniqueArray([woodShape1, woodShape2]);

    Shapes = [woodShape1, woodShape2, woodShape3];
    Wood_ids = ["Wood_shape1", "Wood_shape2", "Wood_shape3"];

    for (let j = 0; j < Shapes.length; j++) {
        const currentShape = Shapes[j];
        const shapeContainer = Wood_ids[j];

        for (let i = 0; i < currentShape.length; i++) {
            $(`#${shapeContainer}_block_${currentShape[i]}`).css("visibility", "visible");
        };
    };
};

// All possible random pattern
function randomShapes() {
    function randomNum() {
        let x = Math.floor((Math.random() * 9) + 1);
        let y = Math.floor((Math.random() * 9) + 1);
        if (x > y) {
            startNum = y;
            endNum = x;
        } else if (x < y) {
            startNum = x;
            endNum = y;
        } else if (x == y) {
            startNum = x;
            endNum = y;
        }
    }

    randomNum();

    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const directions = [
        [0, 1],  //right
        [0, -1], //left
        [1, 0],  //up
        [-1, 0]  //down
    ];

    function isInBounds(matrix, row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
    }

    function findPosition(num) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (matrix[r][c] === num) {
                    return [r, c];
                };
            };
        };
        return null;
    };

    function dfs(row, col, endRow, endCol, path, visited, allPaths) {

        if (row === endRow && col === endCol) {
            allPaths.push([...path, matrix[row][col]].sort());
            return;
        }

        visited.add(`${row}-${col}`);
        path.push(matrix[row][col]);

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (isInBounds(matrix, newRow, newCol) && !visited.has(`${newRow}-${newCol}`)) {
                dfs(newRow, newCol, endRow, endCol, path, visited, allPaths);
            };
        };

        visited.delete(`${row}-${col}`);
        path.pop();
    }

    function findAllPathsDFS(matrix, startNum, endNum) {
        const startPosition = findPosition(startNum);
        const endPosition = findPosition(endNum);

        if (!startPosition || !endPosition) {
            return `Either start number ${startNum} or end number ${endNum} does not exist in the matrix.`;
        }

        const visited = new Set();
        const path = [];
        const allPaths = [];
        const [startRow, startCol] = startPosition;
        const [endRow, endCol] = endPosition;

        dfs(startRow, startCol, endRow, endCol, path, visited, allPaths);

        return allPaths;
    }

    const paths = findAllPathsDFS(matrix, startNum, endNum);

    function removeDuplicates(paths) {
        const map = new Map();
        return paths.filter(path => {
            const key = path.join(',');
            if (map.has(key)) {
                return false;
            }
            map.set(key, true);
            return true;
        });
    };

    const allPaths = removeDuplicates(paths);
    let randomArray = Math.floor((Math.random() * allPaths.length - 1) + 1);
    const pattern = allPaths[randomArray];
    return pattern;
};

document.addEventListener("DOMContentLoaded", () => {

    function BrokenBlockDiv(id, className) {                           
        const div = $("<div>");
        div.attr("id", id);
        div.addClass(className)
        return div;
    }

    function createBrokenImg(src, container, block_class) {         
        const img = $("<img>");
        img.attr("src", src);
        img.addClass(block_class)
        $(`#${container}`).append(img);
        return img;
    }

    function GenerateBrokenRows() {
        for (let row = 1; row <= 10; row++) {
            const container = `#animation_Effects${row}`;
            for (let col = 1; col <= 10; col++) {
                $(container).append(BrokenBlockDiv(`Row${row}Col${col}`, `Destroyed_Row${row} BrokenRows DestroyBlockHidden`));
            }
        }

        for (let i = 1; i <= 10; i++) {
            createBrokenImg("Images/Wood-Block1/TLC-1.png", `Row${i}Col1`, "BrokenBlock LTC1");
            createBrokenImg("Images/Wood-Block1/TRC-2.png", `Row${i}Col1`, "BrokenBlock RTC1");
            createBrokenImg("Images/Wood-Block1/Center-3.png", `Row${i}Col1`, "BrokenBlock Center1");
            createBrokenImg("Images/Wood-Block1/BLC-4.png", `Row${i}Col1`, "BrokenBlock BLC1");
            createBrokenImg("Images/Wood-Block1/BRC-5.png", `Row${i}Col1`, "BrokenBlock BRC1");
            createBrokenImg("Images/Wood-Block2/TLC-1.png", `Row${i}Col2`, "BrokenBlock TLC2");
            createBrokenImg("Images/Wood-Block2/TRC-2.png", `Row${i}Col2`, "BrokenBlock TRC2");
            createBrokenImg("Images/Wood-Block2/BLC-3.png", `Row${i}Col2`, "BrokenBlock BLC2");
            createBrokenImg("Images/Wood-Block2/BRC-4.png", `Row${i}Col2`, "BrokenBlock BRC2");
            createBrokenImg("Images/Wood-Block3/TLC-1.png", `Row${i}Col3`, "BrokenBlock TLC3");
            createBrokenImg("Images/Wood-Block3/TRC-2.png", `Row${i}Col3`, "BrokenBlock TRC3");
            createBrokenImg("Images/Wood-Block3/BLC-3.png", `Row${i}Col3`, "BrokenBlock BLC3");
            createBrokenImg("Images/Wood-Block3/Center-4.png", `Row${i}Col3`, "BrokenBlock Center3");
            createBrokenImg("Images/Wood-Block3/BRC-5.png", `Row${i}Col3`, "BrokenBlock BRC3");
            createBrokenImg("Images/Wood-Block4/TLC-1.png", `Row${i}Col4`, "BrokenBlock TLC4");
            createBrokenImg("Images/Wood-Block4/TRC-2.png", `Row${i}Col4`, "BrokenBlock TRC4");
            createBrokenImg("Images/Wood-Block4/Center-3.png", `Row${i}Col4`, "BrokenBlock TopCenter4");
            createBrokenImg("Images/Wood-Block4/Center-4.png", `Row${i}Col4`, "BrokenBlock BottomCenter4");
            createBrokenImg("Images/Wood-Block4/BLC-5.png", `Row${i}Col4`, "BrokenBlock BLC4");
            createBrokenImg("Images/Wood-Block4/BRC-6.png", `Row${i}Col4`, "BrokenBlock BRC4");
            createBrokenImg("Images/Wood-Block5/TLC-1.png", `Row${i}Col5`, "BrokenBlock TLC5");
            createBrokenImg("Images/Wood-Block5/TRC-2.png", `Row${i}Col5`, "BrokenBlock TRC5");
            createBrokenImg("Images/Wood-Block5/Center-3.png", `Row${i}Col5`, "BrokenBlock Center5");
            createBrokenImg("Images/Wood-Block5/BLC-4.png", `Row${i}Col5`, "BrokenBlock BLC5");
            createBrokenImg("Images/Wood-Block5/BRC-5.png", `Row${i}Col5`, "BrokenBlock BRC5");
            createBrokenImg("Images/Wood-Block6/TLC-1.png", `Row${i}Col6`, "BrokenBlock TLC6");
            createBrokenImg("Images/Wood-Block6/TRC-2.png", `Row${i}Col6`, "BrokenBlock TRC6");
            createBrokenImg("Images/Wood-Block6/BLC-3.png", `Row${i}Col6`, "BrokenBlock BLC6");
            createBrokenImg("Images/Wood-Block6/Center-4.png", `Row${i}Col6`, "BrokenBlock Center6");
            createBrokenImg("Images/Wood-Block6/BRC-5.png", `Row${i}Col6`, "BrokenBlock BRC6");
            createBrokenImg("Images/Wood-Block7/TLC-1.png", `Row${i}Col7`, "BrokenBlock TLC7");
            createBrokenImg("Images/Wood-Block7/TRC-2.png", `Row${i}Col7`, "BrokenBlock TRC7");
            createBrokenImg("Images/Wood-Block7/BLC-3.png", `Row${i}Col7`, "BrokenBlock BLC7");
            createBrokenImg("Images/Wood-Block7/Center-4.png", `Row${i}Col7`, "BrokenBlock Center7");
            createBrokenImg("Images/Wood-Block7/BRC-5.png", `Row${i}Col7`, "BrokenBlock BRC7");
            createBrokenImg("Images/Wood-Block8/TLC-1.png", `Row${i}Col8`, "BrokenBlock TLC8");
            createBrokenImg("Images/Wood-Block8/TRC-2.png", `Row${i}Col8`, "BrokenBlock TRC8");
            createBrokenImg("Images/Wood-Block8/BLC-3.png", `Row${i}Col8`, "BrokenBlock BLC8");
            createBrokenImg("Images/Wood-Block8/Center-4.png", `Row${i}Col8`, "BrokenBlock Center8");
            createBrokenImg("Images/Wood-Block8/BRC-5.png", `Row${i}Col8`, "BrokenBlock BRC8");
            createBrokenImg("Images/Wood-Block9/TLC-1.png", `Row${i}Col9`, "BrokenBlock TLC9");
            createBrokenImg("Images/Wood-Block9/TRC-2.png", `Row${i}Col9`, "BrokenBlock TRC9");
            createBrokenImg("Images/Wood-Block9/TopCenter-3.png", `Row${i}Col9`, "BrokenBlock TopCenter9");
            createBrokenImg("Images/Wood-Block9/BLC-4.png", `Row${i}Col9`, "BrokenBlock BLC9");
            createBrokenImg("Images/Wood-Block9/BottomCenter-5.png", `Row${i}Col9`, "BrokenBlock BottomCenter9");
            createBrokenImg("Images/Wood-Block9/BRC-6.png", `Row${i}Col9`, "BrokenBlock BRC9");
            createBrokenImg("Images/Wood-Block10/TLC-1.png", `Row${i}Col10`, "BrokenBlock TLC10");
            createBrokenImg("Images/Wood-Block10/TRC-2.png", `Row${i}Col10`, "BrokenBlock TRC10");
            createBrokenImg("Images/Wood-Block10/TopCenter-3.png", `Row${i}Col10`, "BrokenBlock TopCenter10");
            createBrokenImg("Images/Wood-Block10/BLC-4.png", `Row${i}Col10`, "BrokenBlock BLC10");
            createBrokenImg("Images/Wood-Block10/BottomCenter-5.png", `Row${i}Col10`, "BrokenBlock BottomCenter10");
            createBrokenImg("Images/Wood-Block10/BRC-6.png", `Row${i}Col10`, "BrokenBlock BRC10");
        }
    }

    function GenerateBrokenColumns() {
        for (let row = 1; row <= 10; row++) {
            const container = `#animation_Effects_Col${row}`;
            for (let col = 1; col <= 10; col++) {
                $(container).append(BrokenBlockDiv(`Row${col}Col${row}`, `Destroyed_Col${row} BrokenCols DestroyBlockHidden`));
            }
        }

        for (let i = 1; i <= 10; i++) {
            createBrokenImg("Images/Wood-Block1/TLC-1.png", `Row1Col${i}`, "BrokenBlock LTC1");
            createBrokenImg("Images/Wood-Block1/TRC-2.png", `Row1Col${i}`, "BrokenBlock RTC1");
            createBrokenImg("Images/Wood-Block1/Center-3.png", `Row1Col${i}`, "BrokenBlock Center1");
            createBrokenImg("Images/Wood-Block1/BLC-4.png", `Row1Col${i}`, "BrokenBlock BLC1");
            createBrokenImg("Images/Wood-Block1/BRC-5.png", `Row1Col${i}`, "BrokenBlock BRC1");
            createBrokenImg("Images/Wood-Block2/TLC-1.png", `Row2Col${i}`, "BrokenBlock TLC2");
            createBrokenImg("Images/Wood-Block2/TRC-2.png", `Row2Col${i}`, "BrokenBlock TRC2");
            createBrokenImg("Images/Wood-Block2/BLC-3.png", `Row2Col${i}`, "BrokenBlock BLC2");
            createBrokenImg("Images/Wood-Block2/BRC-4.png", `Row2Col${i}`, "BrokenBlock BRC2");
            createBrokenImg("Images/Wood-Block3/TLC-1.png", `Row3Col${i}`, "BrokenBlock TLC3");
            createBrokenImg("Images/Wood-Block3/TRC-2.png", `Row3Col${i}`, "BrokenBlock TRC3");
            createBrokenImg("Images/Wood-Block3/BLC-3.png", `Row3Col${i}`, "BrokenBlock BLC3");
            createBrokenImg("Images/Wood-Block3/Center-4.png", `Row3Col${i}`, "BrokenBlock Center3");
            createBrokenImg("Images/Wood-Block3/BRC-5.png", `Row3Col${i}`, "BrokenBlock BRC3");
            createBrokenImg("Images/Wood-Block4/TLC-1.png", `Row4Col${i}`, "BrokenBlock TLC4");
            createBrokenImg("Images/Wood-Block4/TRC-2.png", `Row4Col${i}`, "BrokenBlock TRC4");
            createBrokenImg("Images/Wood-Block4/Center-3.png", `Row4Col${i}`, "BrokenBlock TopCenter4");
            createBrokenImg("Images/Wood-Block4/Center-4.png", `Row4Col${i}`, "BrokenBlock BottomCenter4");
            createBrokenImg("Images/Wood-Block4/BLC-5.png", `Row4Col${i}`, "BrokenBlock BLC4");
            createBrokenImg("Images/Wood-Block4/BRC-6.png", `Row4Col${i}`, "BrokenBlock BRC4");
            createBrokenImg("Images/Wood-Block5/TLC-1.png", `Row5Col${i}`, "BrokenBlock TLC5");
            createBrokenImg("Images/Wood-Block5/TRC-2.png", `Row5Col${i}`, "BrokenBlock TRC5");
            createBrokenImg("Images/Wood-Block5/Center-3.png", `Row5Col${i}`, "BrokenBlock Center5");
            createBrokenImg("Images/Wood-Block5/BLC-4.png", `Row5Col${i}`, "BrokenBlock BLC5");
            createBrokenImg("Images/Wood-Block5/BRC-5.png", `Row5Col${i}`, "BrokenBlock BRC5");
            createBrokenImg("Images/Wood-Block6/TLC-1.png", `Row6Col${i}`, "BrokenBlock TLC6");
            createBrokenImg("Images/Wood-Block6/TRC-2.png", `Row6Col${i}`, "BrokenBlock TRC6");
            createBrokenImg("Images/Wood-Block6/BLC-3.png", `Row6Col${i}`, "BrokenBlock BLC6");
            createBrokenImg("Images/Wood-Block6/Center-4.png", `Row6Col${i}`, "BrokenBlock Center6");
            createBrokenImg("Images/Wood-Block6/BRC-5.png", `Row6Col${i}`, "BrokenBlock BRC6");
            createBrokenImg("Images/Wood-Block7/TLC-1.png", `Row7Col${i}`, "BrokenBlock TLC7");
            createBrokenImg("Images/Wood-Block7/TRC-2.png", `Row7Col${i}`, "BrokenBlock TRC7");
            createBrokenImg("Images/Wood-Block7/BLC-3.png", `Row7Col${i}`, "BrokenBlock BLC7");
            createBrokenImg("Images/Wood-Block7/Center-4.png", `Row7Col${i}`, "BrokenBlock Center7");
            createBrokenImg("Images/Wood-Block7/BRC-5.png", `Row7Col${i}`, "BrokenBlock BRC7");
            createBrokenImg("Images/Wood-Block8/TLC-1.png", `Row8Col${i}`, "BrokenBlock TLC8");
            createBrokenImg("Images/Wood-Block8/TRC-2.png", `Row8Col${i}`, "BrokenBlock TRC8");
            createBrokenImg("Images/Wood-Block8/BLC-3.png", `Row8Col${i}`, "BrokenBlock BLC8");
            createBrokenImg("Images/Wood-Block8/Center-4.png", `Row8Col${i}`, "BrokenBlock Center8");
            createBrokenImg("Images/Wood-Block8/BRC-5.png", `Row8Col${i}`, "BrokenBlock BRC8");
            createBrokenImg("Images/Wood-Block9/TLC-1.png", `Row9Col${i}`, "BrokenBlock TLC9");
            createBrokenImg("Images/Wood-Block9/TRC-2.png", `Row9Col${i}`, "BrokenBlock TRC9");
            createBrokenImg("Images/Wood-Block9/TopCenter-3.png", `Row9Col${i}`, "BrokenBlock TopCenter9");
            createBrokenImg("Images/Wood-Block9/BLC-4.png", `Row9Col${i}`, "BrokenBlock BLC9");
            createBrokenImg("Images/Wood-Block9/BottomCenter-5.png", `Row9Col${i}`, "BrokenBlock BottomCenter9");
            createBrokenImg("Images/Wood-Block9/BRC-6.png", `Row9Col${i}`, "BrokenBlock BRC9");
            createBrokenImg("Images/Wood-Block10/TLC-1.png", `Row10Col${i}`, "BrokenBlock TLC10");
            createBrokenImg("Images/Wood-Block10/TRC-2.png", `Row10Col${i}`, "BrokenBlock TRC10");
            createBrokenImg("Images/Wood-Block10/TopCenter-3.png", `Row10Col${i}`, "BrokenBlock TopCenter10");
            createBrokenImg("Images/Wood-Block10/BLC-4.png", `Row10Col${i}`, "BrokenBlock BLC10");
            createBrokenImg("Images/Wood-Block10/BottomCenter-5.png", `Row10Col${i}`, "BrokenBlock BottomCenter10");
            createBrokenImg("Images/Wood-Block10/BRC-6.png", `Row10Col${i}`, "BrokenBlock BRC10");
        }
    }

    GenerateBrokenColumns();
    GenerateBrokenRows();
   


    const elements = [
        { className: "LTC1", startX: 0, startY: 1, endY: 300, width: 15, duration: 1.4 },                  /////
        { className: "RTC1", startX: 10, startY: 1, endY: 300, width: 29, duration: 1.5 },                     ///
        { className: "Center1", startX: 2, startY: 11, endY: 300, width: 38, duration: 1.4 },                     /// => Block 1
        { className: "BLC1", startX: 1, startY: 20, endY: 300, width: 17, duration: 1.5 },                     ///
        { className: "BRC1", startX: 17, startY: 22, endY: 300, width: 21, duration: 1.5 },                /////
        { className: "TLC2", startX: 0, startY: 1, endY: 300, width: 21, duration: 1.4 },                 /////
        { className: "TRC2", startX: 17, startY: 1, endY: 300, width: 21, duration: 1.5 },                    /// => Block 2
        { className: "BLC2", startX: 1, startY: 21, endY: 300, width: 20, duration: 1.5 },                    /// 
        { className: "BRC2", startX: 19, startY: 20, endY: 300, width: 18, duration: 1.5 },               /////
        { className: "TLC3", startX: 0, startY: 1, endY: 300, width: 18, duration: 1.4 },                 /////
        { className: "TRC3", startX: 18, startY: 1, endY: 300, width: 20, duration: 1.5 },                    ///
        { className: "BLC3", startX: 1, startY: 14, endY: 300, width: 17, duration: 1.5 },                       /// => Block 3
        { className: "Center3", startX: 7, startY: 23, endY: 300, width: 25, duration: 1.4 },                 ///
        { className: "BRC3", startX: 20, startY: 18, endY: 300, width: 18, duration: 1.5 },              /////
        { className: "TLC4", startX: 1, startY: 1, endY: 300, width: 18, duration: 1.4 },                ///// 
        { className: "TRC4", startX: 18, startY: 1, endY: 300, width: 20, duration: 1.5 },                   ///
        { className: "TopCenter4", startX: 3, startY: 1, endY: 300, width: 34, duration: 1.4 },                /// => Block 4
        { className: "BottomCenter4", startX: 3, startY: 19, endY: 300, width: 35, duration: 1.4 },            ///
        { className: "BLC4", startX: 1, startY: 18, endY: 300, width: 23, duration: 1.5 },                   ///
        { className: "BRC4", startX: 19, startY: 20, endY: 300, width: 19, duration: 1.5 },             /////
        { className: "TLC5", startX: 2, startY: 1, endY: 300, width: 27, duration: 1.4 },               ///// 
        { className: "TRC5", startX: 6, startY: 1, endY: 300, width: 32, duration: 1.5 },                   /// 
        { className: "Center5", startX: 2, startY: 14, endY: 300, width: 36, duration: 1.4 },                  /// => Block 5
        { className: "BLC5", startX: 2, startY: 22, endY: 300, width: 17, duration: 1.5 },                  ///
        { className: "BRC5", startX: 20, startY: 20, endY: 300, width: 18, duration: 1.5 },             /////
        { className: "TLC6", startX: 2, startY: 2, endY: 300, width: 17, duration: 1.4 },               ///// 
        { className: "TRC6", startX: 11, startY: 2, endY: 300, width: 27, duration: 1.5 },                  ///
        { className: "BLC6", startX: 2, startY: 21, endY: 300, width: 17, duration: 1.5 },                     /// => Block 6 
        { className: "Center6", startX: 20, startY: 23, endY: 300, width: 13, duration: 1.4 },              ///
        { className: "BRC6", startX: 20, startY: 20, endY: 300, width: 18, duration: 1.5 },             /////
        { className: "TLC7", startX: 2, startY: 2, endY: 300, width: 18, duration: 1.4 },               /////
        { className: "TRC7", startX: 16, startY: 2, endY: 300, width: 22, duration: 1.5 },                  ///
        { className: "BLC7", startX: 2, startY: 18, endY: 300, width: 22, duration: 1.5 },                     /// => Block 7
        { className: "Center7", startX: 18, startY: 19, endY: 300, width: 15, duration: 1.4 },              /// 
        { className: "BRC7", startX: 26, startY: 20, endY: 300, width: 12, duration: 1.5 },             /////
        { className: "TLC8", startX: 2, startY: 2, endY: 300, width: 18, duration: 1.4 },               /////
        { className: "TRC8", startX: 22, startY: 2, endY: 300, width: 16, duration: 1.5 },                  ///
        { className: "BLC8", startX: 2, startY: 16, endY: 300, width: 18, duration: 1.5 },                     /// => Block 8
        { className: "Center8", startX: 13, startY: 28, endY: 300, width: 23, duration: 1.4 },              ///
        { className: "BRC8", startX: 21, startY: 14, endY: 300, width: 17, duration: 1.5 },             /////
        { className: "TLC9", startX: 2, startY: 2, endY: 300, width: 16, duration: 1.4 },               /////
        { className: "TRC9", startX: 22, startY: 2, endY: 300, width: 19, duration: 1.5 },                  ///
        { className: "TopCenter9", startX: 3, startY: 3, endY: 300, width: 24, duration: 1.4 },                /// => Block 9
        { className: "BLC9", startX: 3, startY: 22, endY: 300, width: 20, duration: 1.5 },                     ///
        { className: "BottomCenter9", startX: 22, startY: 28, endY: 300, width: 10, duration: 1.4 },        ///   
        { className: "BRC9", startX: 30, startY: 16, endY: 300, width: 10, duration: 1.5 },             /////
        { className: "TLC10", startX: 4, startY: 2, endY: 300, width: 24, duration: 1.4 },              /////
        { className: "TRC10", startX: 28, startY: 2, endY: 300, width: 12, duration: 1.5 },                 ///
        { className: "TopCenter10", startX: 24, startY: 2, endY: 300, width: 6, duration: 1.4 },               /// => Block 10
        { className: "BLC10", startX: 4, startY: 22, endY: 300, width: 11, duration: 1.5 },                    ///
        { className: "BottomCenter10", startX: 10, startY: 26, endY: 300, width: 29, duration: 1.4 },       ///
        { className: "BRC10", startX: 19, startY: 14, endY: 300, width: 21, duration: 1.5 }             /////
    ];

    elements.forEach(({ className, startX, startY, width, }) => {
        const element = document.querySelectorAll(`.${className}`);
        element.forEach(el => {
            el.style.transform = `translate(${startX}px, ${startY}px)`;
            el.style.width = `${width}px`;
        });
    });

    const addKeyframes = (element, index) => {
        const styleSheet = document.createElement('style');
        document.head.appendChild(styleSheet);
        const sheet = styleSheet.sheet;

        const keyframes = `
            @keyframes particle${index} {
                0% { transform: translate(${element.startX}px, ${element.startY}px); filter: opacity(1); }
                100% { transform: translate(${element.startX}px, ${element.endY}px); filter: opacity(0); }
            }
        `;
        sheet.insertRule(keyframes, sheet.cssRules.length);
    };

    const applyAnimation = (element, index) => {
        const elems = document.querySelectorAll(`.${element.className}`);
        elems.forEach(el => {
            el.style.transform = `translate(${element.startX}px, ${element.startY}px)`;
            el.style.width = `${element.width}px`;
            el.style.animation = `particle${index} ${element.duration}s ease-in-out`;
        });
    };

    function anime() {
        elements.forEach((element, index) => {
            addKeyframes(element, index);
            applyAnimation(element, index);
      
            setTimeout(() => {
                const elems = document.querySelectorAll(`.${element.className}`);
                elems.forEach(el => {
                    el.style.animation = '';
                });
            }, element.duration * 1000);
        });
    }

    window.callAnime = anime;
});


