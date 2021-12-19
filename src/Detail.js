/* eslint-disable */

import React from "react";
// 최근 업데이트된 리엑트와 라우터 5버전 이상에서 사용 가능
import { useHistory, useParams } from "react-router-dom";
//styled-components 설치 후 꼭 import
import styled from "styled-components";

//css를 미리 입혀놓은 컴포넌트를 씀
const 박스 = styled.div`
  padding: 20px;
  background-color: aqua;
`;

const 제목 = styled.h4`
  font-size: 2rem;
`;

function Detail(props) {
  // 이전 페이지들 이용하고 싶을 때 쓰는 라우터의 훅
  const history = useHistory();
  //:id 루트로 들어온 걸 반영. { 사용자가 입력한 URL 파라미터들 }
  const { id } = useParams();
  //find() 반영. 게시물의 순서가 오름차순이라던가, 내림차순 때 유용한게 쓰일 거 같음.
  const findProduct = props.shoes.find((product) => {
    return product.id == id;
  });

  return (
    <>
      <박스>
        <제목>이렇게 쓰면 className 작명할 필요가 사라짐</제목>
      </박스>
      <div className="Container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            {/* find()에서 선언한 걸 넣으면 됨 */}
            <h4 className="pt-5">{findProduct.title}</h4>
            <p>{findProduct.content}</p>
            <p>{findProduct.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                // 라우터의 history + goBack() => 이전페이지로 이동하는 함수. push() => () 안에 들어가는 페이지로 이동!
                history.goBack();
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
