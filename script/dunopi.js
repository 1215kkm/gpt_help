window.onload = function(){


    let pic = "디자인",
        soc = "소스",
        mobileW = 768,
        $codeLink = $('.code_link'),
        $codeBox = $('.code_box'),
        $check = 0,
        $dpre = $('.design_preview').css('display'),
        winW = $(window).width()


    $('*').click(function(){
        console.log(winW, $check, $dpre)
    })

    $(window).resize(function(){
        winW = $(window).width();

        if(winW <= mobileW){
            $('.select_zone').removeClass('on');
            $('.select_zone').removeClass('on2');
        }
        else if(winW > mobileW && $dpre =='block'){
            $('.preview_v').removeClass('on');
            $('.source_v').addClass('on');
        } else if(winW > mobileW && $dpre =='none'){
            $('.preview_v').addClass('on');
            $('.source_v').removeClass('on');
        }
        // if(winW <= 768){
        //     $('.select_zone').removeClass('on');
        //     if($check == 0){
        //         $('.preview_v').addClass('on')
        //     } 
        // } else if(winW > 768 && $check == 0){
        //     $('.preview_v').removeClass('on')
        // }
    })
        

    /* 처음 레이아웃 선택 */
    $('.layout_select li').click(function(){
        $('.layout_select').hide()
        var layoutPic = $(this).find('figure').html();
        var layoutName = $(this).find('h3').text();

        $('.layout_choice figure').html(layoutPic)
        $('.layout_choice h3').text(layoutName);
        $('.layout_choice').show();
    })


    //each_section 비활성
    function noEachSection(){
        $('.select_zone .each_section').addClass('on')
    }function noEachSectioff(){
        $('.select_zone .each_section').removeClass('on')
    }
    function noEachSection2off(){
        $('.prev_img dl').addClass('off')
    }
    function noEachSection2on(){
        $('.prev_img dl').removeClass('off')
    }


    //



    $(window).mousemove(function(){
        $('.message').addClass('on')
    })


    //$('.come1').click(function(){
        // let compMsg = "";
        // compMsg += "<div class='dunopi_message'>"
        // compMsg += "개인, 상업, 다 무료"
        // compMsg += "</div>"

        // $('.content_zone blockquote').html('개인, 상업, 다 무료<span>Free for All</span>')
        // alert('개인, 상업, 다 무료\nFree for All')
    //})


    $('.come1').mouseover(function(){
        $('.dunopi_message').show();
    });
    $('.come1').mouseout(function(){
        $('.dunopi_message').hide();
    })



    /* 화면크기 조절 */
    $('.topmenu .ico_pc').click(function(){
        $('.design_preview').css({width:'100%'})
        $(this).addClass('on').siblings().removeClass('on')
    })
    $('.topmenu .ico_mo').click(function(){
        //if($codeBox.length <= 0 ){
            $('.design_preview').css({width:'20%'});
            $(this).addClass('on').siblings().removeClass('on')
        //}
    })





    /* 우측 썸네일 선택 */
    $('.each_section dd').click(function() {
        var cateName = $(this).siblings('dt').text();
            cateName = cateName.toLowerCase() ;
        
        $('.design_preview').show();

        $('.content_source').addClass('on');
        // $('.preview').addClass('on');
        $(this).toggleClass('on').siblings().removeClass('on');

        $('a.download').slideDown(50);
        $('a.view_wide').slideDown(100);

        $('blockquote').fadeOut(200);
        // $('.preview_v').addClass('on');
        $('.source_v').addClass('on');

        

        if(winW <= mobileW){
            $('.preview_v').addClass('on');
        }
        




        /* ************************  샘플 넣어보기 ****************************/
        var sample1 = '<link rel="stylesheet" href="components/header_source/header1/css/dunopi_pub.css"><link rel="stylesheet" href="components/header_source/header1/css/duno_m_header1.css" media="screen and (max-width:768px)"><script src="script/dunopi_script.js"></script><header id="header1"><div ="center_box_1400 autoHeight"><h1><a href="#"><!-- <img src="images/img_none.jpg" alt="img_none"> --><img src="components/header_source/header1/images/." =""></a></h1><nav><ul><li><a href="#">COMPANY1</a><ul class="lnb"><li><a href="#">submenu1</a></li><li><a href="#">submenu2</a></li><li><a ="#">submenu3</a></li><li><a href="#">submenu4</a></li></ul></li><li><a href="#">BUSINESS</a><ul class="lnb"><li><a href="#">submenu1</a></li><li><a href="#">submenu2</a></li><li><a href="#">submenu3</a></li><li><a href="#">submenu4</a></li></ul></li><li><a href="#">PRODUCTS</a><ul ="lnb"><li><a href="#">submenu1</a></li><li><a href="#">submenu2</a></li><li><a href="#">submenu3</a></li><li><a href="#">submenu4</a></li></ul></li><li><a href="#">SERVICE</a><ul class="lnb"><li><a href="#">submenu1</a></li><li><a href="#">submenu2</a></li><li>< href="#">submenu3</></li><li><a href="#">submenu4</a></li></ul></li><li><a href="#">BOARD</a><ul class="lnb"><li><a href="#">submenu1</a></li><li><a ="#">submenu2</a></li><li><a href="#">submenu3</a></li><li><a href="#">submenu4</a></li></ul></li></ul><i class="xi-bars"></i></nav><i ="xi-star"></i><div class="topmenu"><a href="#">LOGIN</a><a href="#">SIGN UP</a></div></div></header>'

        var sample2 = '<link rel="stylesheet" href="components/section_source/section1/css/style.css"><!-- Link Swipers CSS --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"><div id="visual"><!-- Swiper --><div class="swiper mySwiper"><div class="swiper-wrapper"><div class="swiper-slide"><img src="components/section_source/section1/images/visual1.jpg" alt=""><div class="text_box"><em>안녕하세요<br>연세미금내과입니다.</em><p>찾아주신 모든분의 건강과 행복을 위해서<br>언제나 최선을 다하는 모습을 보여드리겠습니다.</p></div></div><div class="swiper-slide"><img src="components/section_source/section1/images/visual2.jpg" alt=""></div><div class="swiper-slide"><img src="components/section_source/section1/images/visual3.jpg" alt=""></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="swiper-pagination"></div></div></div><!-- Swiper JS --><script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script><!-- Initialize Swiper --><script>var swiper = new Swiper(".mySwiper", {spaceBetween: 0,loop: true,centeredSlides: true,autoplay: {delay: 2500,disableOnInteraction: false,},pagination: {el: ".swiper-pagination",clickable: true,},navigation: {nextEl: ".swiper-button-next",prevEl: ".swiper-button-prev",},});</script>'

        var sample3 = '<link rel="stylesheet" href="components/section_source/section2/css/style.css"><section class="disease "><ul><li><figure><img src="components/section_source/section2/images/sec1_img1.jpg" alt=""></figure><h3>고혈압</h3><p>대부분의 고혈압은 증상이 없습니다. 혈압을 주기적으로 측정하는 것 이외에는 달리 알 수 있는 방법이 없습니다.</p><a ="#">자세히보기</a></li><li><figure><img src="components/section_source/section2/images/sec1_img2.jpg" alt=""></figure><h3>당뇨병</h3><p>대부분의 고혈압은 증상이 없습니다. 혈압을 주기적으로 측정하는 것 이외에는 달리 알 수 있는 방법이 .리 알 수 있는 방법이 없습니다리 알 수 있는 방법이 없습니다</p><a href="#">자세히보기</a></li><li><figure><img src="components/section_source/section2/images/sec1_img3.jpg" alt=""></figure><h3>이상지질혈증</h3><p>대부분의 고혈압은 증상이 .    것 이외에는 달리 알 수 있는 방법이 없습니다.</p><a href="#">자세히보기</a></li></ul></section>'

        var sample4 = '<link rel="stylesheet" href="components/section_source/section3/css/style.css"><section class="info autoHeight"><ul><li class="big"><div class="time"><strong>상담 및 예약<br>전화 : 031-714-7787</strong><ul><li class="tit"><span>평 일</span><span>토 요 일</span><span>점 심 시 간</span></li><li class="cont">오전 9시부터 오후 6시 30분까지<br>오전 9시부터 오후 1시까지<br>오후 1시부터 오후 2시까지<br><span>* 토요일은 점심시간 없음</span></li><li class="dayoff"><b>휴진</b><p>일요일, 공휴일</p></li></ul></div></li><li><figure><img src="images/sec2_ico1.png" alt=""></figure><h3>꼭 필요한 진료</h3><p>환자의  말에 귀기울여 소통하는 의사가 되어 환자의 입장에서 꼭 필요한 진료를 하겠습니다</p></li><li><figure><img src="images/sec2_ico2.png" alt=""></figure><h3>궁금증을 해소해주는 설명</h3><p>다년간의 진료 및 연구경력을 바탕으로 한  의학지식과 노하우를  환자의 눈높이에서 해소해 드리도록 하겠습니다.</p></li><li class="big map"><!--* 카카오맵 - 약도서비스* 한 페이지 내에 약도를 2개 이상 넣을 경우에는* 약도의 수 만큼 소스를 새로 생성, 삽입해야 합니다.--><!-- 1. 약도 노드 --><div id="daumRoughmapContainer1688367539811" class="root_daum_roughmap root_daum_roughmap_landing"></div><!-- 2. 설치 스크립트 --><script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script><!-- 3. 실행 스크립트 --><script charset="UTF-8">new daum.roughmap.Lander({"timestamp" : "1688367539811","key" : "2fe24","mapWidth" : "620","mapHeight" : "280"}).render();</script></li><li><figure><img src="images/sec2_ico3.png" alt=""></figure><h3>의지할 수 있는 전문성</h3><p>아프고 힘들 때 생각나는 환자들의 따뜻한 이웃, 믿을 수 있는 주치의가 되겠습니다.</p></li><li><figure><img src="images/sec2_ico4.png" alt=""></figure><h3>믿음직한 주치의</h3><p>건강에 대해 함께 고민하고아픔을 공감하는 의사가 되고자 합니다</p></li></ul></section>'

        var sample5 = '<link rel="stylesheet" href="components/footer_source/footer1/css/style.css"><footer><div class="center_box_1200"><h1><img src="images/logo_footer.jpg" alt=""></h1><address>연세미금내과 | 주소 : 성남시 분당구 금곡동 155번지 우방코어 5층 (돌마로 73번지) 미금역 2번출구 신한은행건물 5층<br>대표 : 심완섭 | 사업자 : 연세미금내과의원 | 사업자번호 : 129-92-20961 | Tel. 031-717-8175 | Fax. 031-717-8155<br>Copyright © 2023 http://yonseimk.com All Rights Reserved. W3C</address></div></footer>'

       
        
        if($(this).siblings('dt').text() == 'Header'){
            $('.dunopi').append('<div class="dunopi_zone"><span class="btn_del_dunopi">삭제</span><i></i>'+sample1+'</div>')
            zoneRemove()
        }
        if($(this).siblings('dt').text() == 'Slide'){
            $('.dunopi').append('<div class="dunopi_zone"><span class="btn_del_dunopi">삭제</span><i></i>'+sample2+'</div>')
            zoneRemove()
        }
        if($(this).siblings('dt').text() == 'Section'){
            $('.dunopi').append('<div class="dunopi_zone"><span class="btn_del_dunopi">삭제</span><i></i>'+sample4+'</div>')
            zoneRemove()
        }
        if($(this).siblings('dt').text() == 'Footer'){
            $('.dunopi').append('<div class="dunopi_zone"><span class="btn_del_dunopi">삭제</span><i></i>'+sample5+'</div>')
            zoneRemove()
        }
        
        // $('#section3_dunopi').append('<div class="dunopi_zone">'+sample4+'</div>')
        
        // if($(this).siblings('dt').text() == 'Footer'){
        //     $('#footer_dunopi').append('<div class="dunopi_zone"><span class="btn_del_dunopi">삭제</span>'+sample5+'</div>')
        //     zoneRemove()
        // }
        // var kk = $('#header1_dunopi').load('<div class="dunopi_zone">'+'header+'</div>'_source/header1/header1.html')
        // console.log(kk)
    });

    
    function zoneRemove(){
        $('.btn_del_dunopi').click(function(){
            $(this).parent().remove();
        })
    }



    /* 100%보기 */
    $('.view_wide_small').click(function(){
        let dunopiH = $(".dunopi").height();
        let dunopiH2 = $(".content_zone").height();
        let dunopiH3 = dunopiH2/dunopiH
        console.log(dunopiH3)

        if(dunopiH3 < 0.8){
            $(".design_preview").css({transform:'translate(-50%,0) scale('+(dunopiH3-0.005)+')'});
            setTimeout(function(){
                $('.design_preview .btn_del_dunopi').css({transform:'scale('+((1-dunopiH3)/dunopiH3)+')', transformOrigin:'left'});
                $('.design_preview .btn_del_dunopi ~ i').css({transform:'scaleX('+((1-dunopiH3)/dunopiH3)+')', transformOrigin:'left'});
            },500)
            

        } else {
            $(".design_preview").css({transform:'translate(-50%,0) scale(0.8)'})
            $('.design_preview .btn_del_dunopi').css({transform:'scale(1)'});
        }



        // let headerLength = $('#header_dunopi .dunopi_zone').children().length;
        // let sectionLength = $('#section_dunopi .dunopi_zone').children().length;
        // let footerLength = $('#footer_dunopi .dunopi_zone').children().length;
        // let allH = headerLength + sectionLength + footerLength;
        // console.log(headerLength, sectionLength, footerLength);
        // let txt = $(this).html();
        // if(txt == '전체<br>보기'){
        //     $(this).html('기본<br>보기')
        // } else {
        //     $(this).html('전체<br>보기')
        // }

        // if(allH < 3){
        //     $('.content_zone .design_preview').toggleClass('on on8')
        // } 
        // if (allH >= 3 && allH < 4){
        //     $('.content_zone .design_preview').toggleClass('on on6')
        // } else if (allH >= 4 && allH < 5){
        //     $('.content_zone .design_preview').toggleClass('on on5')
        // } else if (allH >= 5 && allH < 6){
        //     $('.content_zone .design_preview').toggleClass('on on3')
        // } else if (allH >= 6 && allH < 7){
        //     $('.content_zone .design_preview').toggleClass('on on3')
        // } else if (allH >= 7 && allH < 8){
        //     $('.content_zone .design_preview').toggleClass('on on3')
        // } else if (allH >= 8 && allH < 10){
        //     $('.content_zone .design_preview').toggleClass('on on2')
        // } else if (allH >= 10 && allH < 12){
        //     $('.content_zone .design_preview').toggleClass('on on15')
        // } else if (allH >= 12 && allH < 14){
        //     $('.content_zone .design_preview').toggleClass('on on13')
        // } else if (allH >= 14){
        //     $('.content_zone .design_preview').toggleClass('on on1')
        // } 


    });




    
    /* 전체보기 */
    $('.view_wide_big').click(function(){
        let previewAllSource = $('.content_zone .design_preview').html();
        $('body').append('<div class="previewAll"><span class="btn_preview_close">전체보기 끄기</span>'+previewAllSource+'</div>')
        $('.previewAll').slideDown(300);


        // let closeW = $('.btn_preview_close').width();
        // let closeH = $('.btn_preview_close').height();


        // let scrT = $('.previewAll').scrollTop();
        // $('.previewAll').scroll(function(){
        //     scrT = $('.previewAll').scrollTop();
        // });
        // $(window).mousemove(function(e){
        //     $('.btn_preview_close').css({left:e.pageX - closeW/2, top:e.pageY + scrT - closeH/2})
        // });

        $('.btn_preview_close').click(function(){
            $('.previewAll').slideUp(300)
            setTimeout(function(){
                $('.previewAll').remove()
            },300)
            console.log('scrT')
    
        });
        
    });





    /* 구성선택 */
    $('.layout_v').click(function(){
        $('.layout_v').removeClass('on');
        $('.preview_v').addClass('on');
        $('.source_v').addClass('on');
        $('.select_zone').removeClass('on');
        
    });

    /* 소스보기 */ 
    $('.source_v').click(function(){
        // $('.source_v').hide();
        // $('.preview_v').show();


        $('.design_preview').hide();
        $('.code_wrap').show();

        $codeLink.show();
        $codeBox.css({display:'flex'});
        $('.content_zone').addClass('on');
        $('.content_source').show().addClass('on');            
        $('.content_source').css({width:'100%'});
        $codeBox.show();
        
        $('.preview_zone').removeClass('on');
        $('.view').removeClass('on');
        
        noEachSectioff();
        $('a.source_v').removeClass('on');
        $('a.preview_v').addClass('on');
        $('a.layout_v').addClass('on');
        /*if($('.option_tab a.source_v').hasClass('on')){
            $(this).text(pic);
        } else {
            $(this).text(soc);
            $('.select_zone .each_section').removeClass('on')
        } */
        if(winW <= mobileW){
            $('.select_zone').addClass('on');
            $('.select_zone').removeClass('on2');
        } else {
            $('.select_zone').removeClass('on');
            $('.select_zone').addClass('on2');
        }
    });




    /* 디자인보기 */
    $('.preview_v').click(function(){
        // $('.source_v').show();
        // $('.preview_v').hide();
        
        $('.design_preview').show();
        $('.select_zone').removeClass('on2');
        
        $codeLink.hide();
        $codeBox.css({display:'none'});
        $('.content_zone').removeClass('on');
        $('.content_source').addClass('on');            
        $('.content_source').css({width:''});
        $codeBox.hide();
        
        $('.preview_zone').removeClass('on');
        $('.view').removeClass('on');
        
        noEachSectioff();
        $('.option_tab a.source_v').addClass('on');

        
        $('.preview_v').removeClass('on');
        $('.layout_v').addClass('on');
        if(winW <= mobileW){
            $('.select_zone').addClass('on');
        };
    });





    $('.code_link a').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
        let codeData = $(this).attr('data-code');
        if(codeData != 'all'){
            $('.code_box > div').css({flexGrow:0, padding:0})
            $('.code_box > div.'+codeData+'_code').css({flexGrow:1, padding:'10px'})
        } else {
            $('.code_box > div').css({flexGrow:1, padding:'10px'})
        }
    });


    // 처음부터
    $('a.reset').click(function(){
        // $('.source_v').show();
        // $('.preview_v').hide();

        $('a.source_v').removeClass('on');
        $('a.preview_v').removeClass('on');
        $('a.layout_v').removeClass('on');
        noEachSection2on()

        $codeLink.hide();
        $codeBox.css({display:'none'});
        
        $('.design_preview').hide();
        
        $('.dunopi *').detach();
        
        $('.each_section dd').removeClass('on')
        $('.content_zone').removeClass('on');
        $('.content_source').removeClass('on');
        $('.preview').removeClass('on');
        $('blockquote').fadeIn(200);
        $('.option_tab').removeClass('on');

        $('a.download').slideUp(50);
        $('a.view_wide').slideUp(100);
        
        $('.layout_select').show();
        $('.layout_choice').hide();
        
        $('.preview_zone').removeClass('on');
        $('.view').removeClass('on');
        $('.select_zone').removeClass('on')
        
        $('.select_zone .each_section').removeClass('on')


        $('.option_tab a.source_v').removeClass('on').text(soc);
        
        $('.content_zone blockquote').html('일을 줄이자!!<span>FREEDOME</span>');
    });


    
    //미리보기이미지 많이 더보기
    $('.view').click(function(){

        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.preview_zone').removeClass('on');
            noEachSection2on()

        } else {
            $('.view').removeClass('on');
            $(this).addClass('on');
            $('.preview_zone').addClass('on');
            noEachSection2off()
        }

        // $('.preview_zone').toggleClass('on')
        // $('.preview_zone').toggle()

            

        for (i = 0; i < $('.preview_zone .imgs li .select_name').length; i++){
            let dtName = $(this).siblings().find('dt').text();
            $('.preview_zone .imgs li').eq(i).find('.select_name').text(dtName+(i+1))
        }
    });



    /* 미리보기 이미지 선택 */
    $('.preview_zone .imgs li').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
    });

    
    $('.preview_zone .imgs li').dblclick(function(){
        $('.preview_zone').removeClass('on')
        $('.view').removeClass('on');

        
        noEachSection2on()
        $('.option_tab .source_v').addClass('on');


        // $('.option_tab a.source_v').toggleClass('on');
        // if($('.option_tab a.source_v').hasClass('on')){
        //     $('.option_tab a.source_v').text(pic);;
        // } else {
        //     $('.option_tab a.source_v').text(soc);;
        //     $('.select_zone .each_section').removeClass('on')
        // }
    });




    $('.each_section .view').click(function(){
        let eachS = $(this).siblings('dl').find('dt').text();
        $('.preview_zone h2').text(eachS)
    });


    // $('.login').click(function(){
    //     alert('준비중')
    // });


    if(winW <= mobileW){
        loginBox();
    }
    function loginBox(){
        $('header#dunopi_main .login').click(function(){
            $('header#dunopi_main .login').toggleClass('on')
            $('header#dunopi_main .login .login_cont').toggle(300).toggleClass('on')
        })
    };





    $('.topmenu.code_input a.icon_normal').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('#dunopi_code_input .code_box').removeClass('on2 on3');
    })
    $('.topmenu.code_input a.icon_height100').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('#dunopi_code_input .code_box').removeClass('on2 on3').addClass('on2');
    })
    $('.topmenu.code_input a.icon_left_right').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('#dunopi_code_input .code_box').removeClass('on2 on3').addClass('on3');

            
        $('#dunopi_code_input .code_box.on3 > div h2').mouseover(function(){
            $('#dunopi_code_input .code_box.on3 > div h2').removeClass('on')
            $(this).addClass('on');
        })
    })

    $('.file_upload input[type=text]').focus(function(){
        $('.dunopi_category_list').show();
    });

    $('.dunopi_category_list li').click(function(){
        let listVal = $(this).find('p').text();

        $(this).addClass('on').siblings().removeClass('on')
        $('.dunopi_category_new').val(listVal);

        // $('.dunopi_category_list').slideUp(200);

        if($('.dunopi_category_new').val().length > 0){
            $('.dunopi_category_new').addClass('on')
        }
    });

    $('.dunopi_category_list li').dblclick(function(){
        $('.dunopi_category_list').slideUp(200);
    })

    $('.dunopi_category_new').keyup(function(){
        console.log($('.dunopi_category_new').val().length)
        if($('.dunopi_category_new').val().length <= 0){
            $('.dunopi_category_new').removeClass('on')
        }
    });

    $('html').click(function(e){
        if($(e.target).parents('.file_upload').length < 1){
            $('.dunopi_category_list').slideUp(200);
        }
    });

    $('.topmenu.code_input .file_upload input[type=file]').change(function(){
        let fileName = $(this).val();
            fileName = fileName.split('\\');
            fileNameLength = fileName.length
            fileName = fileName[fileNameLength - 1]
        $('.file_upload .filename').text(fileName)
    })

}
