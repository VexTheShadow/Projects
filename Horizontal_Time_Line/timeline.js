//Default settings
const starting_item = 0; // 0 -> Top to bottom | 1 -> Bottom to top.
const column_space = "25%"; // Space between columns.
const time_line_row_height_top = "175px"; // Min height for the top row.
const time_line_row_height_bottom = "175px"; // Min height for the bottom row.

// Set Timeline
set_starting_row_psitions();
set_row_height();

//Set starting row positions
function set_starting_row_psitions() {
    top_row_items = document.getElementsByClassName("item-top");
    bottom_row_items = document.getElementsByClassName("item-bottom");
    if (starting_item == 0) {
        for (let i = 0; i < top_row_items.length; i++) {
            top_row_items[i].style.setProperty("margin-right", column_space);
        }
        for (let i = 0; i < bottom_row_items.length; i++) {
            bottom_row_items[i].style.setProperty("margin-left", column_space);
        }
    } else if (starting_item == 1) {
        for (let i = 0; i < top_row_items.length; i++) {
            top_row_items[i].style.setProperty("margin-left", column_space);
        }
        for (let i = 0; i < bottom_row_items.length; i++) {
            bottom_row_items[i].style.setProperty("margin-right", column_space);
        }
    }
}

//Set rows height
function set_row_height() {
    items_row_top = document.getElementsByClassName("items-top");
    items_row_bottom = document.getElementsByClassName("items-bottom");

    for (let i = 0; i < items_row_top.length; i++) {
        items_row_top[i].style.setProperty("min-height", time_line_row_height_top);
    }
    for (let i = 0; i < items_row_bottom.length; i++) {
        items_row_bottom[i].style.setProperty("min-height", time_line_row_height_bottom);
    }
}