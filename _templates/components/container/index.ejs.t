---
to: src/containers/<%= h.changeCase.pascalCase(name) %>/index.js
---
import React from 'react';
import * as S from './styles';

function <%= h.changeCase.pascalCase(name) %>() {
  return (
    <S.Styled<%= h.changeCase.pascalCase(name) %>>
      <%= h.changeCase.pascalCase(name) %>
    </S.Styled<%= h.changeCase.pascalCase(name) %>>
  );
}
export default <%= h.changeCase.pascalCase(name) %>;