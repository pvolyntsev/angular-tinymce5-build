const baseTinyMCEConfig = {
  skin: 'onclass',
  menubar: false,
  toolbar: false,
  inline: true,
  plugins: [
    'lists hr link image code table paste code',
    'autolink',
    'media',
    // TODO 'powerpaste',
    'quickbars',
    'columns blockquote-colors marker-colors span-colors',
  ],
  external_plugins: {
    tiny_mce_wiris : '/mathtype/plugin.min.js',
  },
  extended_valid_elements : 'marker[*],figure[*],columns[*],column[*]',
  quickbars_insert_toolbar: 'quicktable hr columns bullist numlist blockquote-colors additional',
  quickbars_selection_toolbar:
    'undo redo' +
    ' | formatselect' +
    ' | bold italic underline strikethrough' +
    ' | blockquote-colors marker-colors span-colors' +
    ' | align bullist numlist | additional'
  ,
  contextmenu: 'undo redo | inserttable cell row column deletetable | bullist numlist',
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
  toolbar_groups: { // ?
    align: {
      icon: 'alignjustify',
      tooltip: 'Align',
      items: 'alignleft aligncenter alignright alignjustify'
    }
  },
  forced_root_block: 'p',
  custom_colors: false,
  color_cols: 1,
  // color_map: [
  //   '1E252B', 'Black',
  //   '6D7381', 'Gray',
  //   'FFFFFF', 'White',
  //   '5AB3E4', 'Blue',
  //   'E86F79', 'Red',
  //   '87D37C', 'Green',
  //   'FFDD00', 'Yellow'
  // ],
  color_blockquote_map: {
    '#F9CDCD': 'Pink',
    '#FCEFCA': 'Yellow',
    '#C0E2F5': 'Blue',
    '#D4F1E0': 'Green',
    '#E1CBF6': 'Purple',
    '#FCE1C9': 'Orange',
  },
  color_marker_map: {
    'rgba(0,0,0,0.6)': 'Black',
    '#6D7381': 'Gray',
    '#5AB3E4': 'Blue',
    '#E86F79': 'Red',
    '#87D37C': 'Green',
    '#FFDD00': 'Yellow'
  },
  color_span_map: {
    'rgba(0,0,0,0.6)': 'Black',
    '#6D7381': 'Gray',
    '#5AB3E4': 'Blue',
    '#E86F79': 'Red',
    '#87D37C': 'Green',
    '#FFDD00': 'Yellow'
  },
  image_caption: true,
  setup: function (editor) {
    editor.ui.registry.addIcon('math', '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.378 1.85541C8.388 1.76374 7.515 2.50626 7.425 3.52379L7.2 6.17304L9.738 6.17304V8.00643H7.038L6.642 12.6541C6.57464 13.4197 6.2728 14.1444 5.77913 14.7258C5.28546 15.3073 4.62491 15.716 3.8908 15.8943C3.15669 16.0727 2.38612 16.0115 1.68796 15.7196C0.989806 15.4277 0.399347 14.9197 0 14.2674L1.35 12.8924C1.647 13.8549 2.664 14.3958 3.6 14.0841C4.302 13.8641 4.797 13.2316 4.86 12.4891L5.238 8.00643H2.538L2.538 6.17304L5.4 6.17304L5.643 3.35879C5.72544 2.38926 6.18196 1.49258 6.91248 0.865361C7.643 0.238142 8.5879 -0.0684323 9.54 0.0128556C10.674 0.113692 11.7 0.755378 12.294 1.74541L10.944 3.12045C10.719 2.41459 10.107 1.91958 9.378 1.85541ZM18 9.51897L16.731 8.22643L14.184 10.8207L11.637 8.22643L10.35 9.51897L12.915 12.1316L10.35 14.7075L11.637 16L14.184 13.4058L16.731 16L18 14.7075L15.453 12.1316L18 9.51897Z" fill="#1E252B"/></svg>');
    editor.ui.registry.addMenuButton('additional', {
      text: 'Дополнительно',
      fetch: (callback) => callback('image media | tiny_mce_wiris_formulaEditor')
    });
  },
};

export const TinyMCEConfig = {
  ...baseTinyMCEConfig,
};

export const TinyMCEGapsConfig = {
  ...baseTinyMCEConfig,
  extended_valid_elements: baseTinyMCEConfig.extended_valid_elements + ',gap-inputbox,gap-dropbox,gap-selectbox[*],gap-variant[*]',
  plugins: [
    ...baseTinyMCEConfig.plugins,
    'gap-selectbox',
    'gap-inputbox',
    'gap-dropbox',
  ],
  quickbars_selection_toolbar:
    'undo redo' +
    ' | formatselect' +
    ' | gap-selectbox gap-inputbox gap-dropbox' +
    ' | bold italic underline strikethrough' +
    ' | blockquote-colors marker-colors span-colors' +
    ' | align bullist numlist'
  ,
  contextmenu: 'undo redo | gap-selectbox gap-inputbox gap-dropbox | inserttable cell row column deletetable | bullist numlist',
};
