var $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1, $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$exportPath_$$($name$$57$$, $opt_object$$) {
  var $parts$$ = $name$$57$$.split("."), $cur$$ = $goog$global$$;
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && void 0 !== $opt_object$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$24$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$25$$) {
  if(!$fn$$1$$) {
    throw Error();
  }
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments)
  }
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$26$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply($JSCompiler_alias_NULL$$, arguments)
}
;var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$10$$, $obj$$23$$, $opt_fromIndex$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$10$$, $obj$$23$$, $opt_fromIndex$$6$$)
} : function($arr$$11$$, $obj$$24$$, $fromIndex_i$$13_opt_fromIndex$$7$$) {
  $fromIndex_i$$13_opt_fromIndex$$7$$ = $fromIndex_i$$13_opt_fromIndex$$7$$ == $JSCompiler_alias_NULL$$ ? 0 : 0 > $fromIndex_i$$13_opt_fromIndex$$7$$ ? Math.max(0, $arr$$11$$.length + $fromIndex_i$$13_opt_fromIndex$$7$$) : $fromIndex_i$$13_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$11$$)) {
    return!$goog$isString$$($obj$$24$$) || 1 != $obj$$24$$.length ? -1 : $arr$$11$$.indexOf($obj$$24$$, $fromIndex_i$$13_opt_fromIndex$$7$$)
  }
  for(;$fromIndex_i$$13_opt_fromIndex$$7$$ < $arr$$11$$.length;$fromIndex_i$$13_opt_fromIndex$$7$$++) {
    if($fromIndex_i$$13_opt_fromIndex$$7$$ in $arr$$11$$ && $arr$$11$$[$fromIndex_i$$13_opt_fromIndex$$7$$] === $obj$$24$$) {
      return $fromIndex_i$$13_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function($arr$$17$$, $f$$3$$, $opt_obj$$4$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.filter.call($arr$$17$$, $f$$3$$, $opt_obj$$4$$)
} : function($arr$$18$$, $f$$4$$, $opt_obj$$5$$) {
  for(var $l$$4$$ = $arr$$18$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$2$$ = $goog$isString$$($arr$$18$$) ? $arr$$18$$.split("") : $arr$$18$$, $i$$17$$ = 0;$i$$17$$ < $l$$4$$;$i$$17$$++) {
    if($i$$17$$ in $arr2$$2$$) {
      var $val$$11$$ = $arr2$$2$$[$i$$17$$];
      $f$$4$$.call($opt_obj$$5$$, $val$$11$$, $i$$17$$, $arr$$18$$) && ($res$$[$resLength$$++] = $val$$11$$)
    }
  }
  return $res$$
};
function $goog$array$slice$$($arr$$42$$, $start$$5$$, $opt_end$$13$$) {
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$42$$, $start$$5$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$42$$, $start$$5$$, $opt_end$$13$$)
}
;var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedGecko_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : $JSCompiler_alias_NULL$$
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_10$$;
if($ua$$inline_10$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_11$$ = $goog$global$$.navigator;
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_10$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_10$$.indexOf("MSIE");
  $goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_10$$.indexOf("WebKit");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_11$$.product
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_16$$ = "", $re$$inline_17$$;
  if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_18$$ = $goog$global$$.opera.version, $version$$inline_16$$ = "function" == typeof $operaVersion$$inline_18$$ ? $operaVersion$$inline_18$$() : $operaVersion$$inline_18$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_17$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_17$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_17$$ = /WebKit\/(\S+)/), $re$$inline_17$$) {
      var $arr$$inline_19$$ = $re$$inline_17$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_16$$ = $arr$$inline_19$$ ? $arr$$inline_19$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_20$$, $doc$$inline_91$$ = $goog$global$$.document;
    $docMode$$inline_20$$ = $doc$$inline_91$$ ? $doc$$inline_91$$.documentMode : void 0;
    if($docMode$$inline_20$$ > parseFloat($version$$inline_16$$)) {
      $goog$userAgent$VERSION$$ = String($docMode$$inline_20$$);
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_16$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  var $JSCompiler_temp$$4_order$$inline_24$$;
  if(!($JSCompiler_temp$$4_order$$inline_24$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$])) {
    $JSCompiler_temp$$4_order$$inline_24$$ = 0;
    for(var $v1Subs$$inline_25$$ = String($goog$userAgent$VERSION$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $v2Subs$$inline_26$$ = String($version$$8$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $subCount$$inline_27$$ = Math.max($v1Subs$$inline_25$$.length, $v2Subs$$inline_26$$.length), $subIdx$$inline_28$$ = 0;0 == $JSCompiler_temp$$4_order$$inline_24$$ && $subIdx$$inline_28$$ < $subCount$$inline_27$$;$subIdx$$inline_28$$++) {
      var $v1Sub$$inline_29$$ = $v1Subs$$inline_25$$[$subIdx$$inline_28$$] || "", $v2Sub$$inline_30$$ = $v2Subs$$inline_26$$[$subIdx$$inline_28$$] || "", $v1CompParser$$inline_31$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_32$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_33$$ = $v1CompParser$$inline_31$$.exec($v1Sub$$inline_29$$) || ["", "", ""], $v2Comp$$inline_34$$ = $v2CompParser$$inline_32$$.exec($v2Sub$$inline_30$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_33$$[0].length && 0 == $v2Comp$$inline_34$$[0].length) {
          break
        }
        $JSCompiler_temp$$4_order$$inline_24$$ = ((0 == $v1Comp$$inline_33$$[1].length ? 0 : parseInt($v1Comp$$inline_33$$[1], 10)) < (0 == $v2Comp$$inline_34$$[1].length ? 0 : parseInt($v2Comp$$inline_34$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_33$$[1].length ? 0 : parseInt($v1Comp$$inline_33$$[1], 10)) > (0 == $v2Comp$$inline_34$$[1].length ? 0 : parseInt($v2Comp$$inline_34$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_33$$[2].length) < (0 == $v2Comp$$inline_34$$[2].length) ? -1 : (0 == $v1Comp$$inline_33$$[2].length) > 
        (0 == $v2Comp$$inline_34$$[2].length) ? 1 : 0) || ($v1Comp$$inline_33$$[2] < $v2Comp$$inline_34$$[2] ? -1 : $v1Comp$$inline_33$$[2] > $v2Comp$$inline_34$$[2] ? 1 : 0)
      }while(0 == $JSCompiler_temp$$4_order$$inline_24$$)
    }
    $JSCompiler_temp$$4_order$$inline_24$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $JSCompiler_temp$$4_order$$inline_24$$
  }
  return $JSCompiler_temp$$4_order$$inline_24$$
}
var $goog$userAgent$isDocumentModeCache_$$ = {};
function $goog$userAgent$isDocumentMode$$($documentMode$$) {
  return $goog$userAgent$isDocumentModeCache_$$[$documentMode$$] || ($goog$userAgent$isDocumentModeCache_$$[$documentMode$$] = $goog$userAgent$IE$$ && !!document.documentMode && document.documentMode >= $documentMode$$)
}
;!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9);
!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9);
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersion$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9);
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$(9) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
function $goog$dom$classes$get$$($className$$4_element$$7$$) {
  $className$$4_element$$7$$ = $className$$4_element$$7$$.className;
  return $goog$isString$$($className$$4_element$$7$$) && $className$$4_element$$7$$.match(/\S+/g) || []
}
function $goog$dom$classes$add$$($element$$8$$, $var_args$$50$$) {
  for(var $classes$$ = $goog$dom$classes$get$$($element$$8$$), $args$$3_args$$inline_66$$ = $goog$array$slice$$(arguments, 1), $classes$$inline_65$$ = $classes$$, $i$$inline_67$$ = 0;$i$$inline_67$$ < $args$$3_args$$inline_66$$.length;$i$$inline_67$$++) {
    0 <= $goog$array$indexOf$$($classes$$inline_65$$, $args$$3_args$$inline_66$$[$i$$inline_67$$]) || $classes$$inline_65$$.push($args$$3_args$$inline_66$$[$i$$inline_67$$])
  }
  $element$$8$$.className = $classes$$.join(" ")
}
function $goog$dom$classes$remove$$($element$$9$$, $var_args$$51$$) {
  var $classes$$1_newClasses$$ = $goog$dom$classes$get$$($element$$9$$), $arr2$$inline_70$$ = $goog$array$slice$$(arguments, 1), $classes$$1_newClasses$$ = $goog$array$filter$$($classes$$1_newClasses$$, function($item$$inline_71$$) {
    return!(0 <= $goog$array$indexOf$$($arr2$$inline_70$$, $item$$inline_71$$))
  });
  $element$$9$$.className = $classes$$1_newClasses$$.join(" ")
}
;function $goog$dom$getElementByClass$$($JSCompiler_temp$$0_className$$9$$) {
  var $parent$$6_parent$$inline_75$$ = document;
  $parent$$6_parent$$inline_75$$.querySelectorAll && $parent$$6_parent$$inline_75$$.querySelector ? $JSCompiler_temp$$0_className$$9$$ = $parent$$6_parent$$inline_75$$.querySelector("." + $JSCompiler_temp$$0_className$$9$$) : ($parent$$6_parent$$inline_75$$ = document, $JSCompiler_temp$$0_className$$9$$ = ($parent$$6_parent$$inline_75$$.querySelectorAll && $parent$$6_parent$$inline_75$$.querySelector ? $parent$$6_parent$$inline_75$$.querySelectorAll("." + $JSCompiler_temp$$0_className$$9$$) : $parent$$6_parent$$inline_75$$.getElementsByClassName ? 
  $parent$$6_parent$$inline_75$$.getElementsByClassName($JSCompiler_temp$$0_className$$9$$) : $goog$dom$getElementsByTagNameAndClass_$$($JSCompiler_temp$$0_className$$9$$))[0]);
  return $JSCompiler_temp$$0_className$$9$$ || $JSCompiler_alias_NULL$$
}
function $goog$dom$getElementsByTagNameAndClass_$$($opt_class$$1$$) {
  var $el$$1_parent$$8$$, $i$$63$$, $len$$1$$, $arrayLike$$;
  $el$$1_parent$$8$$ = document;
  if($el$$1_parent$$8$$.querySelectorAll && $el$$1_parent$$8$$.querySelector && $opt_class$$1$$) {
    return $el$$1_parent$$8$$.querySelectorAll("" + ($opt_class$$1$$ ? "." + $opt_class$$1$$ : ""))
  }
  if($opt_class$$1$$ && $el$$1_parent$$8$$.getElementsByClassName) {
    var $els$$ = $el$$1_parent$$8$$.getElementsByClassName($opt_class$$1$$);
    return $els$$
  }
  $els$$ = $el$$1_parent$$8$$.getElementsByTagName("*");
  if($opt_class$$1$$) {
    $arrayLike$$ = {};
    for($i$$63$$ = $len$$1$$ = 0;$el$$1_parent$$8$$ = $els$$[$i$$63$$];$i$$63$$++) {
      var $className$$10$$ = $el$$1_parent$$8$$.className;
      "function" == typeof $className$$10$$.split && 0 <= $goog$array$indexOf$$($className$$10$$.split(/\s+/), $opt_class$$1$$) && ($arrayLike$$[$len$$1$$++] = $el$$1_parent$$8$$)
    }
    $arrayLike$$.length = $len$$1$$;
    return $arrayLike$$
  }
  return $els$$
}
;$goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$(8) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.2") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("532.1");
$goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$(8);
var $doc$$ = document, $win$$ = window;
function $xurban42$js$Snap$$($userOpts$$) {
  var $settings$$ = {element:$JSCompiler_alias_NULL$$, dragger:$JSCompiler_alias_NULL$$, disable:"none", addBodyClasses:$JSCompiler_alias_TRUE$$, hyperextensible:$JSCompiler_alias_TRUE$$, resistance:0.5, flickThreshold:50, transitionSpeed:0.3, easing:"ease", maxPosition:0, minPosition:-0, tapToClose:$JSCompiler_alias_TRUE$$, touchToDrag:$JSCompiler_alias_TRUE$$, slideIntent:40, minDragDistance:5}, $cache$$ = {$simpleStates$:{$opening$:$JSCompiler_alias_NULL$$, $towards$:$JSCompiler_alias_NULL$$, 
  $hyperExtending$:$JSCompiler_alias_NULL$$, $halfway$:$JSCompiler_alias_NULL$$, $flick$:$JSCompiler_alias_NULL$$, $translation$:{$absolute$:0, $relative$:0, $sinceDirectionChange$:0, $percentage$:0}}}, $eventList$$ = {}, $utils$$ = {$sideOpened$:"", $hasTouch$:"ontouchstart" in $doc$$.documentElement || $win$$.navigator.msPointerEnabled, $eventType$:function($action$$1$$) {
    return{down:$utils$$.$hasTouch$ ? "touchstart" : "mousedown", move:$utils$$.$hasTouch$ ? "touchmove" : "mousemove", up:$utils$$.$hasTouch$ ? "touchend" : "mouseup", out:$utils$$.$hasTouch$ ? "touchcancel" : "mouseout"}[$action$$1$$]
  }, page:function($t$$, $e$$24$$) {
    return $utils$$.$hasTouch$ && $e$$24$$.touches.length && $e$$24$$.touches[0] ? $e$$24$$.touches[0]["page" + $t$$] : $e$$24$$["page" + $t$$]
  }, $klass$:{$has$:function($el$$4$$, $name$$62$$) {
    return-1 !== $el$$4$$.className.indexOf($name$$62$$)
  }, add:function($el$$5$$, $name$$63$$) {
    !$utils$$.$klass$.$has$($el$$5$$, $name$$63$$) && $settings$$.addBodyClasses && ($el$$5$$.className += " " + $name$$63$$)
  }, remove:function($el$$6$$, $name$$64$$) {
    $settings$$.addBodyClasses && ($el$$6$$.className = $el$$6$$.className.replace($name$$64$$, "").replace(/^\s+|\s+$/g, ""))
  }}, dispatchEvent:function($type$$77$$) {
    if("function" === typeof $eventList$$[$type$$77$$]) {
      return $eventList$$[$type$$77$$].call()
    }
  }, vendor:function() {
    var $tmp$$1$$ = $doc$$.createElement("div"), $prefixes$$ = ["webkit", "Moz", "O", "ms"], $i$$71$$;
    for($i$$71$$ in $prefixes$$) {
      if("undefined" !== typeof $tmp$$1$$.style[$prefixes$$[$i$$71$$] + "Transition"]) {
        return $prefixes$$[$i$$71$$]
      }
    }
  }, $transitionCallback$:function() {
    return"Moz" === $cache$$.vendor || "ms" === $cache$$.vendor ? "transitionend" : $cache$$.vendor + "TransitionEnd"
  }, $canTransform$:function() {
    return"undefined" !== typeof $settings$$.element.style[$cache$$.vendor + "Transform"]
  }, $deepExtend$:function($destination$$, $source$$3$$) {
    for(var $property$$3$$ in $source$$3$$) {
      $source$$3$$[$property$$3$$] && $source$$3$$[$property$$3$$].constructor && $source$$3$$[$property$$3$$].constructor === Object ? ($destination$$[$property$$3$$] = $destination$$[$property$$3$$] || {}, $utils$$.$deepExtend$($destination$$[$property$$3$$], $source$$3$$[$property$$3$$])) : $destination$$[$property$$3$$] = $source$$3$$[$property$$3$$]
    }
    return $destination$$
  }, $angleOfDrag$:function($x$$59$$, $y$$36$$) {
    var $degrees$$2_theta$$;
    $degrees$$2_theta$$ = Math.atan2(-($cache$$.$startDragY$ - $y$$36$$), $cache$$.$startDragX$ - $x$$59$$);
    0 > $degrees$$2_theta$$ && ($degrees$$2_theta$$ += 2 * Math.PI);
    $degrees$$2_theta$$ = Math.floor($degrees$$2_theta$$ * (180 / Math.PI) - 180);
    0 > $degrees$$2_theta$$ && -180 < $degrees$$2_theta$$ && ($degrees$$2_theta$$ = 360 - Math.abs($degrees$$2_theta$$));
    return Math.abs($degrees$$2_theta$$)
  }, $events$:{$addEvent$:function addEvent($element$$29$$, $eventName$$, $func$$3$$) {
    if($element$$29$$.addEventListener) {
      return $element$$29$$.addEventListener($eventName$$, $func$$3$$, $JSCompiler_alias_FALSE$$)
    }
    if($element$$29$$.attachEvent) {
      return $element$$29$$.attachEvent("on" + $eventName$$, $func$$3$$)
    }
  }, $removeEvent$:function addEvent$$1($element$$30$$, $eventName$$1$$, $func$$4$$) {
    if($element$$30$$.addEventListener) {
      return $element$$30$$.removeEventListener($eventName$$1$$, $func$$4$$, $JSCompiler_alias_FALSE$$)
    }
    if($element$$30$$.attachEvent) {
      return $element$$30$$.detachEvent("on" + $eventName$$1$$, $func$$4$$)
    }
  }, $prevent$:function($e$$25$$) {
    $e$$25$$.preventDefault ? $e$$25$$.preventDefault() : $e$$25$$.returnValue = $JSCompiler_alias_FALSE$$
  }}, $parentUntil$:function($el$$7$$, $attr$$) {
    for(var $isStr$$ = "string" === typeof $attr$$;$el$$7$$.parentNode;) {
      if($isStr$$ && $el$$7$$.getAttribute && $el$$7$$.getAttribute($attr$$) || !$isStr$$ && $el$$7$$ === $attr$$) {
        return $el$$7$$
      }
      $el$$7$$ = $el$$7$$.parentNode
    }
    return $JSCompiler_alias_NULL$$
  }}, $action$$ = {translate:{get:{$matrix$:function($index$$55$$) {
    if($utils$$.$canTransform$()) {
      var $matrix$$3$$ = $win$$.getComputedStyle($settings$$.element)[$cache$$.vendor + "Transform"].match(/\((.*)\)/);
      return $matrix$$3$$ ? ($matrix$$3$$ = $matrix$$3$$[1].split(","), 16 === $matrix$$3$$.length && ($index$$55$$ += 8), parseInt($matrix$$3$$[$index$$55$$], 10)) : 0
    }
    return parseInt($settings$$.element.style.left, 10)
  }}, $easeCallback$:function() {
    $settings$$.element.style[$cache$$.vendor + "Transition"] = "";
    $cache$$.$translation$ = $action$$.translate.get.$matrix$(4);
    $cache$$.$easing$ = $JSCompiler_alias_FALSE$$;
    clearInterval($cache$$.$animatingInterval$);
    0 === $cache$$.$easingTo$ && ($utils$$.$klass$.remove($doc$$.body, "snapjs-right"), $utils$$.$klass$.remove($doc$$.body, "snapjs-left"), $utils$$.$sideOpened$ = "");
    $utils$$.dispatchEvent("animated");
    $utils$$.dispatchEvent("animated" + $utils$$.$sideOpened$);
    $utils$$.$events$.$removeEvent$($settings$$.element, $utils$$.$transitionCallback$(), $action$$.translate.$easeCallback$)
  }, $easeTo$:function($n$$5$$) {
    $utils$$.$canTransform$() ? ($cache$$.$easing$ = $JSCompiler_alias_TRUE$$, $cache$$.$easingTo$ = $n$$5$$, $settings$$.element.style[$cache$$.vendor + "Transition"] = "all " + $settings$$.transitionSpeed + "s " + $settings$$.easing, $cache$$.$animatingInterval$ = setInterval(function() {
      $utils$$.dispatchEvent("animating")
    }, 1), $utils$$.$events$.$addEvent$($settings$$.element, $utils$$.$transitionCallback$(), $action$$.translate.$easeCallback$)) : $cache$$.$translation$ = $n$$5$$;
    $action$$.translate.x($n$$5$$);
    0 === $n$$5$$ && ($settings$$.element.style[$cache$$.vendor + "Transform"] = "")
  }, $jumpTo$:function($n$$6$$) {
    $utils$$.$canTransform$() ? ($cache$$.$easing$ = $JSCompiler_alias_TRUE$$, $cache$$.$easingTo$ = $n$$6$$, $action$$.translate.x($n$$6$$), $action$$.translate.$easeCallback$()) : ($cache$$.$translation$ = $n$$6$$, $action$$.translate.x($n$$6$$));
    0 === $n$$6$$ && ($settings$$.element.style[$cache$$.vendor + "Transform"] = "")
  }, x:function($n$$7$$) {
    if(!("left" === $settings$$.disable && 0 < $n$$7$$ || "right" === $settings$$.disable && 0 > $n$$7$$)) {
      if(!$settings$$.hyperextensible) {
        if($n$$7$$ === $settings$$.maxPosition || $n$$7$$ > $settings$$.maxPosition) {
          $n$$7$$ = $settings$$.maxPosition
        }else {
          if($n$$7$$ === $settings$$.minPosition || $n$$7$$ < $settings$$.minPosition) {
            $n$$7$$ = $settings$$.minPosition
          }
        }
      }
      $n$$7$$ = parseInt($n$$7$$, 10);
      isNaN($n$$7$$) && ($n$$7$$ = 0);
      $utils$$.$canTransform$() ? $settings$$.element.style[$cache$$.vendor + "Transform"] = "translate3d(" + $n$$7$$ + "px, 0,0)" : ($settings$$.element.style.width = ($win$$.innerWidth || $doc$$.documentElement.clientWidth) + "px", $settings$$.element.style.left = $n$$7$$ + "px", $settings$$.element.style.right = "")
    }
  }}, $drag$:{$listen$:function() {
    $cache$$.$translation$ = 0;
    $cache$$.$easing$ = $JSCompiler_alias_FALSE$$;
    $utils$$.$events$.$addEvent$($settings$$.element, $utils$$.$eventType$("down"), $action$$.$drag$.$startDrag$);
    $utils$$.$events$.$addEvent$($settings$$.element, $utils$$.$eventType$("move"), $action$$.$drag$.$dragging$);
    $utils$$.$events$.$addEvent$($settings$$.element, $utils$$.$eventType$("up"), $action$$.$drag$.$endDrag$);
    $utils$$.$events$.$addEvent$($settings$$.element, $utils$$.$eventType$("out"), $action$$.$drag$.$endDrag$)
  }, $stopListening$:function() {
    $utils$$.$events$.$removeEvent$($settings$$.element, $utils$$.$eventType$("down"), $action$$.$drag$.$startDrag$);
    $utils$$.$events$.$removeEvent$($settings$$.element, $utils$$.$eventType$("move"), $action$$.$drag$.$dragging$);
    $utils$$.$events$.$removeEvent$($settings$$.element, $utils$$.$eventType$("up"), $action$$.$drag$.$endDrag$);
    $utils$$.$events$.$removeEvent$($settings$$.element, $utils$$.$eventType$("out"), $action$$.$drag$.$endDrag$)
  }, $startDrag$:function($e$$26$$) {
    var $target$$43$$ = $e$$26$$.target ? $e$$26$$.target : $e$$26$$.srcElement;
    if($utils$$.$parentUntil$($target$$43$$, "data-snap-ignore")) {
      $utils$$.dispatchEvent("ignore")
    }else {
      if(!$settings$$.dragger || $utils$$.$parentUntil$($target$$43$$, $settings$$.dragger) || !($cache$$.$translation$ !== $settings$$.minPosition && $cache$$.$translation$ !== $settings$$.maxPosition)) {
        $utils$$.dispatchEvent("start"), $settings$$.element.style[$cache$$.vendor + "Transition"] = "", $cache$$.$isDragging$ = $JSCompiler_alias_TRUE$$, $cache$$.$hasIntent$ = $JSCompiler_alias_NULL$$, $cache$$.$intentChecked$ = $JSCompiler_alias_FALSE$$, $cache$$.$startDragX$ = $utils$$.page("X", $e$$26$$), $cache$$.$startDragY$ = $utils$$.page("Y", $e$$26$$), $cache$$.$dragWatchers$ = {$current$:0, $last$:0, $hold$:0, state:""}, $cache$$.$simpleStates$ = {$opening$:$JSCompiler_alias_NULL$$, $towards$:$JSCompiler_alias_NULL$$, 
        $hyperExtending$:$JSCompiler_alias_NULL$$, $halfway$:$JSCompiler_alias_NULL$$, $flick$:$JSCompiler_alias_NULL$$, $translation$:{$absolute$:0, $relative$:0, $sinceDirectionChange$:0, $percentage$:0}}
      }
    }
  }, $dragging$:function($diff_e$$27$$) {
    if($cache$$.$isDragging$ && $settings$$.touchToDrag) {
      var $thePageX$$ = $utils$$.page("X", $diff_e$$27$$), $deg_thePageY$$ = $utils$$.page("Y", $diff_e$$27$$), $translated$$ = $cache$$.$translation$, $absoluteTranslation$$ = $action$$.translate.get.$matrix$(4), $whileDragX$$ = $thePageX$$ - $cache$$.$startDragX$, $openingLeft$$ = 0 < $absoluteTranslation$$, $translateTo$$ = $whileDragX$$;
      if(!$cache$$.$intentChecked$ || $cache$$.$hasIntent$) {
        $settings$$.addBodyClasses && (0 < $absoluteTranslation$$ ? ($utils$$.$klass$.add($doc$$.body, "snapjs-left"), $utils$$.$sideOpened$ = "left", $utils$$.$klass$.remove($doc$$.body, "snapjs-right")) : 0 > $absoluteTranslation$$ && ($utils$$.$klass$.add($doc$$.body, "snapjs-right"), $utils$$.$klass$.remove($doc$$.body, "snapjs-left"), $utils$$.$sideOpened$ = "right"));
        if($cache$$.$hasIntent$ === $JSCompiler_alias_FALSE$$ || $cache$$.$hasIntent$ === $JSCompiler_alias_NULL$$) {
          var $deg_thePageY$$ = $utils$$.$angleOfDrag$($thePageX$$, $deg_thePageY$$), $inRightRange$$ = 0 <= $deg_thePageY$$ && $deg_thePageY$$ <= $settings$$.slideIntent || 360 >= $deg_thePageY$$ && $deg_thePageY$$ > 360 - $settings$$.slideIntent;
          $cache$$.$hasIntent$ = !(180 <= $deg_thePageY$$ && $deg_thePageY$$ <= 180 + $settings$$.slideIntent || 180 >= $deg_thePageY$$ && $deg_thePageY$$ >= 180 - $settings$$.slideIntent) && !$inRightRange$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$;
          $cache$$.$intentChecked$ = $JSCompiler_alias_TRUE$$
        }
        $settings$$.minDragDistance >= Math.abs($thePageX$$ - $cache$$.$startDragX$) || $cache$$.$hasIntent$ === $JSCompiler_alias_FALSE$$ || ($utils$$.$events$.$prevent$($diff_e$$27$$), $utils$$.dispatchEvent("drag"), $cache$$.$dragWatchers$.$current$ = $thePageX$$, $cache$$.$dragWatchers$.$last$ > $thePageX$$ ? ("left" !== $cache$$.$dragWatchers$.state && ($cache$$.$dragWatchers$.state = "left", $cache$$.$dragWatchers$.$hold$ = $thePageX$$), $cache$$.$dragWatchers$.$last$ = $thePageX$$) : $cache$$.$dragWatchers$.$last$ < 
        $thePageX$$ && ("right" !== $cache$$.$dragWatchers$.state && ($cache$$.$dragWatchers$.state = "right", $cache$$.$dragWatchers$.$hold$ = $thePageX$$), $cache$$.$dragWatchers$.$last$ = $thePageX$$), $openingLeft$$ ? ($settings$$.maxPosition < $absoluteTranslation$$ && ($diff_e$$27$$ = ($absoluteTranslation$$ - $settings$$.maxPosition) * $settings$$.resistance, $translateTo$$ = $whileDragX$$ - $diff_e$$27$$), $cache$$.$simpleStates$ = {$opening$:"left", $towards$:$cache$$.$dragWatchers$.state, 
        $hyperExtending$:$settings$$.maxPosition < $absoluteTranslation$$, $halfway$:$absoluteTranslation$$ > $settings$$.maxPosition / 2, $flick$:Math.abs($cache$$.$dragWatchers$.$current$ - $cache$$.$dragWatchers$.$hold$) > $settings$$.flickThreshold, $translation$:{$absolute$:$absoluteTranslation$$, $relative$:$whileDragX$$, $sinceDirectionChange$:$cache$$.$dragWatchers$.$current$ - $cache$$.$dragWatchers$.$hold$, $percentage$:100 * ($absoluteTranslation$$ / $settings$$.maxPosition)}}) : ($settings$$.minPosition > 
        $absoluteTranslation$$ && ($diff_e$$27$$ = ($absoluteTranslation$$ - $settings$$.minPosition) * $settings$$.resistance, $translateTo$$ = $whileDragX$$ - $diff_e$$27$$), $cache$$.$simpleStates$ = {$opening$:"right", $towards$:$cache$$.$dragWatchers$.state, $hyperExtending$:$settings$$.minPosition > $absoluteTranslation$$, $halfway$:$absoluteTranslation$$ < $settings$$.minPosition / 2, $flick$:Math.abs($cache$$.$dragWatchers$.$current$ - $cache$$.$dragWatchers$.$hold$) > $settings$$.flickThreshold, 
        $translation$:{$absolute$:$absoluteTranslation$$, $relative$:$whileDragX$$, $sinceDirectionChange$:$cache$$.$dragWatchers$.$current$ - $cache$$.$dragWatchers$.$hold$, $percentage$:100 * ($absoluteTranslation$$ / $settings$$.minPosition)}}), $action$$.translate.x($translateTo$$ + $translated$$))
      }
    }
  }, $endDrag$:function($e$$28$$) {
    if($cache$$.$isDragging$) {
      $utils$$.dispatchEvent("end");
      var $translated$$1$$ = $action$$.translate.get.$matrix$(4);
      0 === $cache$$.$dragWatchers$.$current$ && 0 !== $translated$$1$$ && $settings$$.tapToClose ? ($utils$$.dispatchEvent("close"), $utils$$.$events$.$prevent$($e$$28$$), $action$$.translate.$easeTo$(0), $cache$$.$isDragging$ = $JSCompiler_alias_FALSE$$, $cache$$.$startDragX$ = 0) : ("left" === $cache$$.$simpleStates$.$opening$ ? $cache$$.$simpleStates$.$halfway$ || $cache$$.$simpleStates$.$hyperExtending$ || $cache$$.$simpleStates$.$flick$ ? $cache$$.$simpleStates$.$flick$ && "left" === $cache$$.$simpleStates$.$towards$ ? 
      $action$$.translate.$easeTo$(0) : ($cache$$.$simpleStates$.$flick$ && "right" === $cache$$.$simpleStates$.$towards$ || $cache$$.$simpleStates$.$halfway$ || $cache$$.$simpleStates$.$hyperExtending$) && $action$$.translate.$easeTo$($settings$$.maxPosition) : $action$$.translate.$easeTo$(0) : "right" === $cache$$.$simpleStates$.$opening$ && ($cache$$.$simpleStates$.$halfway$ || $cache$$.$simpleStates$.$hyperExtending$ || $cache$$.$simpleStates$.$flick$ ? $cache$$.$simpleStates$.$flick$ && "right" === 
      $cache$$.$simpleStates$.$towards$ ? $action$$.translate.$easeTo$(0) : ($cache$$.$simpleStates$.$flick$ && "left" === $cache$$.$simpleStates$.$towards$ || $cache$$.$simpleStates$.$halfway$ || $cache$$.$simpleStates$.$hyperExtending$) && $action$$.translate.$easeTo$($settings$$.minPosition) : $action$$.translate.$easeTo$(0)), $cache$$.$isDragging$ = $JSCompiler_alias_FALSE$$, $cache$$.$startDragX$ = $utils$$.page("X", $e$$28$$))
    }
  }}};
  this.$_utils$ = $utils$$;
  this.$_cache$ = $cache$$;
  this.$_action$ = $action$$;
  this.$_settings$ = $settings$$;
  this.$_eventList$ = $eventList$$;
  $userOpts$$.element && ($utils$$.$deepExtend$($settings$$, $userOpts$$), $cache$$.vendor = $utils$$.vendor(), $action$$.$drag$.$listen$())
}
$JSCompiler_prototypeAlias$$ = $xurban42$js$Snap$$.prototype;
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($side$$) {
  this.$_utils$.dispatchEvent("open");
  this.$_utils$.$klass$.remove($doc$$.body, "snapjs-expand-left");
  this.$_utils$.$klass$.remove($doc$$.body, "snapjs-expand-right");
  "left" === $side$$ ? (this.$_cache$.$simpleStates$.$opening$ = "left", this.$_cache$.$simpleStates$.$towards$ = "right", this.$_utils$.$klass$.add($doc$$.body, "snapjs-left"), this.$_utils$.$sideOpened$ = "left", this.$_utils$.$klass$.remove($doc$$.body, "snapjs-right"), this.$_action$.translate.$easeTo$(this.$_settings$.maxPosition), this.$_utils$.dispatchEvent("openedLeft")) : "right" === $side$$ && (this.$_cache$.$simpleStates$.$opening$ = "right", this.$_cache$.$simpleStates$.$towards$ = "left", 
  this.$_utils$.$klass$.remove($doc$$.body, "snapjs-left"), this.$_utils$.$sideOpened$ = "right", this.$_utils$.$klass$.add($doc$$.body, "snapjs-right"), this.$_action$.translate.$easeTo$(this.$_settings$.minPosition), this.$_utils$.dispatchEvent("openedRight"))
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  this.$_utils$.dispatchEvent("close");
  this.$_action$.translate.$easeTo$(0)
};
function $JSCompiler_StaticMethods_closeWithoutAnimation$$($JSCompiler_StaticMethods_closeWithoutAnimation$self$$) {
  $JSCompiler_StaticMethods_closeWithoutAnimation$self$$.$_utils$.dispatchEvent("close");
  $JSCompiler_StaticMethods_closeWithoutAnimation$self$$.$_action$.translate.$jumpTo$(0)
}
$JSCompiler_prototypeAlias$$.expand = function $$JSCompiler_prototypeAlias$$$expand$($side$$1$$) {
  var $to$$ = $win$$.innerWidth || $doc$$.documentElement.clientWidth;
  "left" === $side$$1$$ ? (this.$_utils$.dispatchEvent("expandLeft"), this.$_utils$.$klass$.add($doc$$.body, "snapjs-expand-left"), this.$_utils$.$klass$.remove($doc$$.body, "snapjs-expand-right")) : (this.$_utils$.dispatchEvent("expandRight"), this.$_utils$.$klass$.add($doc$$.body, "snapjs-expand-right"), this.$_utils$.$klass$.remove($doc$$.body, "snapjs-expand-left"), $to$$ *= -1);
  this.$_action$.translate.$easeTo$($to$$)
};
$JSCompiler_prototypeAlias$$.$on$ = function $$JSCompiler_prototypeAlias$$$$on$$($evt$$16$$, $fn$$6$$) {
  this.$_eventList$[$evt$$16$$] = $fn$$6$$;
  return this
};
$JSCompiler_prototypeAlias$$.$off$ = function $$JSCompiler_prototypeAlias$$$$off$$($evt$$17$$) {
  this.$_eventList$[$evt$$17$$] && (this.$_eventList$[$evt$$17$$] = $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.enable = function $$JSCompiler_prototypeAlias$$$enable$() {
  this.$_utils$.dispatchEvent("enable");
  this.$_action$.$drag$.$listen$()
};
$JSCompiler_prototypeAlias$$.disable = function $$JSCompiler_prototypeAlias$$$disable$() {
  this.$_utils$.dispatchEvent("disable");
  this.$_action$.$drag$.$stopListening$()
};
$JSCompiler_prototypeAlias$$.$settings$ = function $$JSCompiler_prototypeAlias$$$$settings$$($opts$$1$$) {
  this.$_utils$.$deepExtend$(this.$_settings$, $opts$$1$$)
};
$JSCompiler_prototypeAlias$$.$getSettingProp$ = function $$JSCompiler_prototypeAlias$$$$getSettingProp$$($property$$4$$) {
  return this.$_settings$[$property$$4$$]
};
$JSCompiler_prototypeAlias$$.state = function $$JSCompiler_prototypeAlias$$$state$() {
  var $fromLeft$$ = this.$_action$.translate.get.$matrix$(4);
  return{state:$fromLeft$$ === this.$_settings$.maxPosition ? "left" : $fromLeft$$ === this.$_settings$.minPosition ? "right" : "closed", info:this.$_cache$.$simpleStates$}
};
$goog$exportPath_$$("Snap", $xurban42$js$Snap$$);
$xurban42$js$Snap$$.prototype.open = $xurban42$js$Snap$$.prototype.open;
$xurban42$js$Snap$$.prototype.close = $xurban42$js$Snap$$.prototype.close;
$xurban42$js$Snap$$.prototype.expand = $xurban42$js$Snap$$.prototype.expand;
$xurban42$js$Snap$$.prototype.on = $xurban42$js$Snap$$.prototype.$on$;
$xurban42$js$Snap$$.prototype.off = $xurban42$js$Snap$$.prototype.$off$;
$xurban42$js$Snap$$.prototype.enable = $xurban42$js$Snap$$.prototype.enable;
$xurban42$js$Snap$$.prototype.disable = $xurban42$js$Snap$$.prototype.disable;
$xurban42$js$Snap$$.prototype.settings = $xurban42$js$Snap$$.prototype.$settings$;
$xurban42$js$Snap$$.prototype.getSettingProp = $xurban42$js$Snap$$.prototype.$getSettingProp$;
$xurban42$js$Snap$$.prototype.state = $xurban42$js$Snap$$.prototype.state;
$goog$exportPath_$$("Slider", function($el$$8$$) {
  this.$snapJs$ = new $xurban42$js$Snap$$({element:$goog$isString$$($el$$8$$) ? document.getElementById($el$$8$$) : $el$$8$$, dragger:$JSCompiler_alias_NULL$$, disable:"none", addBodyClasses:$JSCompiler_alias_TRUE$$, hyperextensible:$JSCompiler_alias_TRUE$$, resistance:0.5, flickThreshold:50, transitionSpeed:0.3, easing:"ease", maxPosition:360, minPosition:-360, tapToClose:$JSCompiler_alias_FALSE$$, touchToDrag:$JSCompiler_alias_TRUE$$, slideIntent:40, minDragDistance:5});
  this.$snapJs$.$on$("animatedleft", $goog$bind$$(function() {
    $goog$dom$classes$add$$(this.$activeEl$, "next");
    $goog$dom$classes$remove$$(this.$activeEl$, "active");
    $goog$dom$classes$add$$(this.$prevEl$, "active");
    $goog$dom$classes$remove$$(this.$prevEl$, "prev");
    $goog$dom$classes$add$$(this.$nextEl$, "prev");
    $goog$dom$classes$remove$$(this.$nextEl$, "next");
    var $tmp$$inline_124$$ = this.$activeEl$;
    this.$activeEl$ = this.$prevEl$;
    this.$prevEl$ = this.$nextEl$;
    this.$nextEl$ = $tmp$$inline_124$$;
    $JSCompiler_StaticMethods_closeWithoutAnimation$$(this.$snapJs$)
  }, this));
  this.$snapJs$.$on$("animatedright", $goog$bind$$(function() {
    $goog$dom$classes$add$$(this.$activeEl$, "prev");
    $goog$dom$classes$remove$$(this.$activeEl$, "active");
    $goog$dom$classes$add$$(this.$nextEl$, "active");
    $goog$dom$classes$remove$$(this.$nextEl$, "next");
    $goog$dom$classes$add$$(this.$prevEl$, "next");
    $goog$dom$classes$remove$$(this.$prevEl$, "prev");
    var $tmp$$inline_127$$ = this.$activeEl$;
    this.$activeEl$ = this.$nextEl$;
    this.$nextEl$ = this.$prevEl$;
    this.$prevEl$ = $tmp$$inline_127$$;
    $JSCompiler_StaticMethods_closeWithoutAnimation$$(this.$snapJs$)
  }, this));
  this.$prevEl$ = $goog$dom$getElementByClass$$("prev");
  this.$activeEl$ = $goog$dom$getElementByClass$$("active");
  this.$nextEl$ = $goog$dom$getElementByClass$$("next")
});

