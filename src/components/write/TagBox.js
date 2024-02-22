import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import React from 'react';

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const TagItem = React.memo(({ tag }) => <Tag>#{tag}</Tag>);

const TagList = React.memo(({ tags }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm>
        <input placeholder="태그 입력" /> <button type="submit">추가</button>
      </TagForm>
      <TagList tags={['tag1', 'tag2', 'tag3']} />
    </TagBoxBlock>
  );
};

export default TagBox;