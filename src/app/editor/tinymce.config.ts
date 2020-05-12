const baseTinyMCEConfig = {
  skin: 'lingua',
  menubar: false,
  toolbar: false,
  inline: true,
  plugins: [
    'lists hr link image code table paste code',
    'autolink',
    'media',
    // TODO 'powerpaste',
    'quickbars',
  ],
  external_plugins: {
    tiny_mce_wiris : '/mathtype/plugin.min.js',
  },
  extended_valid_elements : 'marker[*],figure[*]',
  quickbars_insert_toolbar: 'quicktable hr image media tiny_mce_wiris_formulaEditor',
  quickbars_selection_toolbar:
    'undo redo' +
    ' | formatselect' +
    ' | bold italic underline strikethrough' +
    ' | backcolor forecolor' +
    ' | tiny_mce_wiris_formulaEditor' +
    ' | align' +
    ' | bullist numlist'
  ,
  contextmenu: 'undo redo | inserttable cell row column deletetable | tiny_mce_wiris_formulaEditor | bullist numlist',
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
  toolbar_groups: { // ?
    align: {
      icon: 'alignjustify',
      tooltip: 'Align',
      items: 'alignleft aligncenter alignright alignjustify'
    }
  },
  color_cols: 1,
  custom_colors: false,
  color_map: [
    '1E252B', 'Black',
    '6D7381', 'Gray',
    'FFFFFF', 'White',
    '5AB3E4', 'Blue',
    'E86F79', 'Red',
    '87D37C', 'Green',
    'FFDD00', 'Yellow'
  ],
};

export const TinyMCEConfig = {
  ...baseTinyMCEConfig,
};

export const TinyMCEGapsConfig = {
  ...baseTinyMCEConfig,
  extended_valid_elements: baseTinyMCEConfig.extended_valid_elements + ',gap-inputbox,gap-dropbox,gap-selectbox[*],gap-variant[*]',
  plugins: [
    ...baseTinyMCEConfig.plugins,
    'gap-selectlist',
    'gap-dropbox',
    'gap-inputbox',
  ],
  quickbars_selection_toolbar:
    'undo redo' +
    ' | formatselect' +
    ' | gap-selectlist gap-inputbox gap-dropbox' +
    ' | bold italic underline strikethrough' +
    ' | backcolor forecolor' +
    ' | tiny_mce_wiris_formulaEditor' +
    ' | align' +
    ' | bullist numlist'
  ,
  contextmenu: 'undo redo | gap-selectlist gap-inputbox gap-dropbox | inserttable cell row column deletetable | bullist numlist',
};
