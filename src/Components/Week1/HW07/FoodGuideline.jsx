import React from 'react';

const foodGuidelines = [
  {
    title: '제때에',
    content: '신체리듬에 맞춰 규칙적으로 식사하는 것은 아주 중요합니다. 특히 아침을 거르지 맙시다.',
  },
  {
    title: '골고루',
    content: '다양한 식품을 선택해 부족한 영양소가 없도록 해야 합니다.',
  },
  {
    title: '알맞게',
    content: '표준 체중을 유지하기 위해 하루에 필요한 적정열량을 섭취하는 것은 비만과 성인병을 예방하는 기본 노력입니다.',
  },
  {
    title: '싱겁게',
    content: '소금의 과잉 섭취는 고혈압을 비롯한 순환기계질환의 중요 요인이 됩니다. 건강을 위해 소금 섭취를 하루에 5g이하로 줄입시다.',
  },
  {
    title: '즐겁게',
    content: '식사는 가능한 여럿이 함께 하는 것이 좋습니다. 가족끼리 즐겁게 하는 식사는 그 자체가 즐거움이고, 성인병 관리입니다.',
  },
];

const FoodGuideline = () => {
  return (
    <div>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px"}}>○ 올바른 식생활 지침</p>
      {foodGuidelines.map((guideline, index) => (
        <div key={index}>
          <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "green", marginBottom: "5px"}}>{guideline.title}</h3>
          <p style={{ fontSize: "14px", marginBottom: "10px"}}>{guideline.content}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodGuideline;