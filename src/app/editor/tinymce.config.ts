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
  extended_valid_elements : 'gap-inputbox,gap-dropbox,gap-selectbox[*],gap-variant[*],marker[*],figure[*]',
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
};

export const TinyMCEConfig = {
  ...baseTinyMCEConfig,
};

export const TinyMCEGapsConfig = {
  ...baseTinyMCEConfig,
  plugins: [
    ...baseTinyMCEConfig.plugins,
    'selectlist',
  ],
  quickbars_selection_toolbar:
    'undo redo' +
    ' | selectlist' +
    ' | formatselect' +
    ' | bold italic underline strikethrough' +
    ' | backcolor forecolor' +
    ' | tiny_mce_wiris_formulaEditor' +
    ' | align' +
    ' | bullist numlist'
  ,
  contextmenu: 'undo redo | selectlist | inserttable cell row column deletetable | tiny_mce_wiris_formulaEditor | bullist numlist',
};
