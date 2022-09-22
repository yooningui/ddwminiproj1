// Transcrypt'ed from Python, 2022-09-22 14:00:13
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	random.seed (seed);
	var random_list = [];
	for (var i = 0; i < number; i++) {
		random_list.append (i);
	}
	random.shuffle (random_list);
	return random_list;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	var array = gen_random_int (number, seed);
	var array_str = ','.join ((function () {
		var __accu0__ = [];
		for (var anumber of array) {
			__accu0__.append (str (anumber));
		}
		return py_iter (__accu0__);
	}) ()) + '.';
	document.getElementById ('generate').innerHTML = array_str;
};
export var insertion_sort = function (array) {
	for (var i = 1; i < len (array); i++) {
		var temp = array [i];
		var j = i - 1;
		while (j >= 0 && temp < array [j]) {
			array [j + 1] = array [j];
			j--;
		}
		array [j + 1] = temp;
	}
	return array;
};
export var sortnumber1 = function () {
	var numberstring = document.getElementById ('generate').innerHTML;
	var arraystring = numberstring.__getslice__ (0, -(1), 1).py_split (',');
	var arrayinteger = [];
	for (var i of arraystring) {
		arrayinteger.append (int (i));
	}
	var sortedarray = insertion_sort (arrayinteger);
	var array_str = ','.join ((function () {
		var __accu0__ = [];
		for (var anumber of sortedarray) {
			__accu0__.append (str (anumber));
		}
		return py_iter (__accu0__);
	}) ()) + '.';
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var arraystring = value.py_split (',');
	var arrayinteger = [];
	for (var i of arraystring) {
		arrayinteger.append (int (i));
	}
	insertion_sort (arrayinteger);
	var array_sorted = ','.join ((function () {
		var __accu0__ = [];
		for (var anumber of arrayinteger) {
			__accu0__.append (str (anumber));
		}
		return py_iter (__accu0__);
	}) ()) + '.';
	document.getElementById ('sorted').innerHTML = array_sorted;
};

//# sourceMappingURL=library.map