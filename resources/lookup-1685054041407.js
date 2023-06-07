(function(window, undefined) {
  var dictionary = {
    "15763251-836b-4cb4-ad76-c521d25bc455": "Order Track",
    "9d2dac22-6bc5-4824-b82f-1f89355c1d48": "Entrega 2",
    "7ac25508-3a45-423a-a752-dba781aab129": "Entrega 0",
    "30442029-67bc-4ce6-9a1e-0a9e159e5008": "Firma",
    "75979555-4580-4614-bf16-2e871a2903c0": "Onboarding 2",
    "2e03bfbf-9abe-415a-a276-7c024bfda030": "Orden Entregada",
    "a1dfadcc-17a0-4676-b5e6-0e9fedfd86f1": "Recoleccion 2.1",
    "1260056c-ab12-427d-8700-d6c3854ebc06": "Recoleccion 2",
    "fca843e2-5a4c-47b8-beda-c4f621ccf449": "Recoleccion 0B",
    "96f4cb2b-009f-4c4d-9871-68e1892dfa03": "Captura Foto",
    "a785ec58-900f-4c26-b325-23f159066ddd": "Recoleccion 1",
    "ced621d4-3c92-4eed-ae3d-843cafdb4e9f": "Recoleccion 0",
    "e454e13d-d8a7-4c57-a932-cffc7f7a67af": "Validación",
    "13dbc5d4-b32c-4f0c-a240-68c3fd7269f9": "Onboarding 3",
    "2273a261-082d-473e-94b8-d03ca7c5ffcd": "Asignacion Inicial",
    "8eae172d-c7fe-4025-8daa-d4f087d25e52": "Profile",
    "a726c5fd-8718-4e1b-aa39-cbc360879878": "Order",
    "c5fd64a5-8bee-44ef-8d79-1c1130d5cf13": "Asignacion Final",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio Sesión",
    "880cbb20-8fd2-4046-ad4d-ab8e363e38b2": "Onboarding 1",
    "a9906df2-f196-422d-b22f-19c20aaa1960": "Entrega 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);