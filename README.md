# Chapter 01 컴퓨터 네트워크와 인터넷

## 인터넷
전 세계적으로 수백만 개의 컴퓨팅 장치들을 연결하는 컴퓨터 네트워크이다.

## 네트워크
노드들이 자원을 공유할 수 있게 하는 디지털 전기통신망의 하나이다.

## host = 종단시스템
네트워크에서 송신자와 수신자 역할을 하는 장치

## 호스트, 종단 시스템
네트워크에 연결되어 있는 장치들

## ISP
인터넷 서비스 제공자는 인터넷에 접속하는 수단을 제공하는 주체

## pps
초당 보낼 수 있는 패킷 수를 의미

## 대역폭(bps)
초당 보낼 수 있는 비트 수를 의미<br />
1초당 처리할 수 있는 데이터의 양이다.

> 즉 쉽게 말하면 자동차가 다니는 도로의 폭이다. 2차선보다는 4차선 도로가 차가 많이 다닐 수 있는것 처럼
> 하지만, 네트워크에서의 1초는 너무나도 긴 시간이다. 그래서 1초당 처리할 수 있는 데이터 양 보단 얼마 동안 데이터 양을 처리할 수 있냐가 정확하다. 

```
kbps (킬로비트퍼초) = 1,000 bps
Mbps (메가비트퍼초) = 1,000,000 bps
Gbps (기가비트퍼초) = 1,000,000,000 bps
Tbps (테라비트퍼초) = 1,000,000,000,000 bps
```
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/ce34ca53-b8b4-4f06-a3d2-338deb5bcba4)

## bps vs Bps
bps는 비트 초 단위이고 Bps는 바이트 초 단위이다.

## RFC
미국의 국제 인터넷 표준화기구인 IETF에서 제공,관리 하는 문서이다.
## 인트라넷
사설 네트워크

## 패킷 
네트워크를 통해 전송되는 데이터의 단위

## 프로토콜
통신 장비 사이에서 메시지를 주고받는 양식과 규칙의 체계

## 네트워크 프로토콜 구조
[헤더][페이로드][풋터]
- 페이로드 : 프로토콜 상위게층에서 내려온 데이터
- 풋터 :테일이라고도 부르며, 추가적인 정보를 가진 데이터

## OSI7계층
<img width="600" alt=" " src="https://github.com/spdhsrnvl123/Study/assets/83896466/82b6955b-04a7-42fa-878c-e3614139c4c4">
<img width="600" alt="스크린샷 2024-03-10 오후 5 11 54" src="https://github.com/spdhsrnvl123/Study/assets/83896466/fcda2b2a-6903-45a6-a897-a71e29f8e967">

### 응용 계층
여러가지 서비스를 제공하는 실질적인 프로그램, 사용자 인터페이스
### 표현 계층
데이터를 어떤 형식으로 전달할지 정하는 계층 ex) 그림파일(jpeg,png), 압축파일(zip,tar.gz), 일반 텍스트
### 세션 계층
논리적인 연결을 정의하는 계층, 네트워크 장치들간의 연결 설정의 유지 동화 등을 어떻게 수행할지를 정의
<img width="600" alt="스크린샷 2024-03-10 오후 5 09 20" src="https://github.com/spdhsrnvl123/Study/assets/83896466/ca555ea5-7fe4-42f1-b19d-43ab115687ca">

> 세션계층부터 표현, 응용 계층은 사용자를 위한 계층으로 어플리케이션 관련 기능을 당담하고 생각하면 된다.
<br />
> 실질적으로 IT인프라를 당담하는 계층은 1~4계층까지라고 보면 된다.

### 전송 계층 - 4계층
포트주소를 이용해서 통신, 오류 제어(신뢰성 유무), 특정 프로그램 간의 통신(웹 브라우저 and 웹 서버)
> 주요 프로토콜 <br />
- TCP(User Datagram Protocol) : 안정적으로 확실하게 데이터를 전송하는 프로토콜
- UDP(Transmission Control Protocol) : 데이터가 유실될 수 있지만 무조건 빠르게 전송하는 프로토콜
<img width="600" alt="스크린샷 2024-03-10 오후 4 53 17" src="https://github.com/spdhsrnvl123/Study/assets/83896466/19c65ccb-0d4e-4784-ad2d-1999842a8007">

* Datagram : ㄷ[

> 결론 : 네트워크계층에서 데이터가 어떻게 목적지까지 찾아가는지 당담했다면 전송계층은 어떤 방식으로 데이터를 보내는가를 당담하는 계층이라고 보면된다.

### 네트워크 계층 - 3계층
**IP주소**를 이용해서 통신, 전송 경로를 선택 어느 경로로 가는 것이 최선인지를 결정, 특정 네트워크를 찾아가는 역할

<img width="600" alt="스크린샷 2024-03-10 오후 4 50 40" src="https://github.com/spdhsrnvl123/Study/assets/83896466/fd6a4535-e82b-4a91-b57c-458d922f56da">

> 네트워크 경로에서 최적의 경로를 선택한다. 이 과정을 **라우팅**이라고 한다.
<img width="600" alt="스크린샷 2024-03-10 오후 4 48 08" src="https://github.com/spdhsrnvl123/Study/assets/83896466/afd80bd0-ccff-4e19-ba28-0c3e306afcb1">

### 데이터 링크 계층 - 2계층
MAC주소를 이용해서 통신, 특정 네트워크에서 특정PC를 찾아가는 역할<br />
이더넷 : MAC주소를 가지고 데이터를 주고 받을 수 있게 하는 프로토콜
> 같은 네트워크에 존재하는 장치간에 데이터를 전달하고 전달한 데이터가 오류가 있는지 없는지 체크하고 재전송하기도 한다. <br />
> 흐름을 제어하는 기능도 가지고 있다.

<img width="600" alt="스크린샷 2024-03-10 오후 4 32 14" src="https://github.com/spdhsrnvl123/Study/assets/83896466/a478cd78-0dd9-4ba6-b8e1-79d901c6ab57">
<img width="600" alt="스크린샷 2024-03-10 오후 4 33 05" src="https://github.com/spdhsrnvl123/Study/assets/83896466/5c3b419c-cf25-41f0-b9e5-bc71209242d8">

### 물리 계층 - 1계층
상위 계층에서 캡슐화된 데이터를 bit단위로 변경, 전기신호로 전송하고 받은 전기신호를 bit단위로 해석하는 역할
> 단순히 데이터를 전송하는 역할만 수행하고 데이터가 무엇인지 어떻게 보내는지 관여하지 않는다.

<img width="600" alt="스크린샷 2024-03-10 오후 4 25 52" src="https://github.com/spdhsrnvl123/Study/assets/83896466/7af1ec05-9feb-4f8d-ba43-142d5b2edcf9">

#### UTP
LAN 케이블은 구리선으로 만들었다.

<img width="600" alt="스크린샷 2024-03-10 오후 6 53 17" src="https://github.com/spdhsrnvl123/Study/assets/83896466/8700f13e-e3fd-4cab-a3d4-b20544e6c610">

<img width="600" alt="스크린샷 2024-03-10 오후 6 29 21" src="https://github.com/spdhsrnvl123/Study/assets/83896466/5b488615-e080-4a20-aa7e-c891a85b2ff5">

<img width="600" alt="스크린샷 2024-03-10 오후 6 30 33" src="https://github.com/spdhsrnvl123/Study/assets/83896466/7462077f-19f6-440b-af9f-46bd69dcd08d">

#### 광섬유
광케이블은 광섬유로 만들어졌다. 즉, 빛을 이용하는 통신 방식
- 데이터 전송 속도가 빠르고, 먼 거리까지 보낼 수 있다.
- 이러한 장점이 있는 만큼 가격이 비싸다.
- 단점) 광섬유가 얇고 탄력이 없어서 취급에 주의해야한다.

![image](https://github.com/spdhsrnvl123/Study/assets/83896466/66a86c0f-ab55-4042-9d0f-85d6966e4121)

## 데이터 전송 단위
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/2d16175b-b5e2-4b55-80de-d154aeb54eba)

<img width="600" alt="스크린샷 2024-03-10 오후 6 18 33" src="https://github.com/spdhsrnvl123/Study/assets/83896466/f7e9831f-f870-414f-995c-97fdca1ed126">

### 세그먼트
전송계층에 데이터 전송 단위

### 패킷
네트워크계층에 데이터 전송 단위

### 프레임
데이터링크계층에 전송 단위

## 접속 네트워크
### 가정 접속
가정의 종단 시스템을 네트워크에 연결

### 기관 접속
사업체나 교육기관의 시스템을 네트워크에 연결

### 무선 접속
이동단말기를 네트워크에 연결

## 분산 애플리케이션
클라이언트는 한 컴퓨터에서 수행하고 서버는 다른 컴퓨터에서 수행하므로, 클라이언트와 서버 인터넷 애플리케이션들은 분산 애플리케이션 형태이다.

## 처리 지연
패킷 헤더를 조사하고 그 패킷을 어디로 보낼지를 결정하는 시간

## 큐잉 지연
큐에서 링크로 전송되기를 기다리는 시간

## 전송 지연
패킷의 모든 비트들을 링크로 전송하는데 필요한 시간

## 전파 지연
링크의 처음에서 라우터 B까지의 전파에 필요한 시간

## 네크워크 프로토콜 통신 방식
- 캡슐화(Encapsulation) : 네트쿼크 통신(보낼 때)을 할 때 높은 계층에서부터 낮은 계층으로 프로토콜들을 생성하는 과정
- 디캡슐화(Decapsulation) : 네트쿼크 통신(받을 때)을 할 때 낮은 계층에서부터 높은 계층으로 프로토콜들을 분석하는 과정

## 백본망
- 다양한 네트워크를 상호 연결하는 컴퓨터 네트워크의 일부로서, 각기 다른 LAN이나 부분망 간에 정보를 교환하기 위한 경로
- 여러 LAN이다.
- ISP랑 백본망이랑 연결된다.

## TraceRoute
- 인터넷을 통해 거친 경로를 표시하고 그 구간의 정보를 기록하고 인터넷 프로토콜 네트워크를 통해 패킷의 전송 지연을 측정
- 쉽게말해 경로 기록을 한다. 종단 시스템에서 다른 종단 시스템까지 가기 위한 노드들의 거친 경로를 표시한다.

<img width="600" alt="스크린샷 2024-03-22 오후 7 12 37" src="https://github.com/spdhsrnvl123/Study/assets/83896466/a82db039-302f-4676-9c9c-1ef02c768e87">

# Chapter 02 애플리케이션 계층

## 네트워크 애플리케이션
다른 종단 시스템에서 동작하고 네트워크를 통해 서로 통신하는 프로그램
> ex1) 웹 애플리케이션에는 서로 통신하는 서버와 클라이언트로 구별되는 두 프로그램이 있다.
> ex2) P2P 파일 공유 시스템에는 파일 공유 커뮤니티에 참여하는 각 호스트에 있는 프로그램

## P2P(Peer-to-Peer)
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/f7a1b8e1-5c98-42b6-8c43-7eba0db20bf9)

---
## 웹(Web)
## 온-디맨드(on-demand)
## 웹 브라우저
## 웹 서버
## HTTP
### 비지속 연결 HTTP
#### RTT
### 지속 연결 HTTP
### HTTP 메시지 포맷
#### HTTP 요청 메시지
#### HTTP 응답 메시지
### 쿠키
### 캐시
### FTP
### SMTP
### MIME
### POP3
### DNS
### TCP 소켓 프로그래밍
### UDP 소켓 프로그래밍
## TCP

